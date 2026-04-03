const User = require("../models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const { OAuth2Client } = require("google-auth-library");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, recaptchaToken } = req.body;

    if (!recaptchaToken) {
      return res.status(400).json({ success: false, error: "ReCAPTCHA verification missing." });
    }

    const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || "6LcBXaUsAAAAALzanYciofaQW5W9sPp8i6eBHABy";
    const axios = require("axios");
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`;
    
    try {
      const captchaRes = await axios.post(verifyUrl);
      if (!captchaRes.data.success) {
         return res.status(400).json({ success: false, error: "ReCAPTCHA validation failed. Please try again." });
      }
    } catch(err) {
      return res.status(500).json({ success: false, error: "Error validating ReCAPTCHA." });
    }

    let finalRole = role || "user";
    if (process.env.NODE_ENV !== "development" && finalRole === "admin") {
      finalRole = "user";
    }

    const user = await User.create({ name, email, password, role: finalRole });

    const token = generateToken(user._id);

    try {
      const dateString = new Date().toLocaleString();
      await sendEmail({
        email: user.email,
        subject: "Welcome to Ahmad Cloths House",
        message: `Hello ${user.name},\n\nWelcome to the luxurious world of Ahmad Cloths House.\n\nYou successfully signed up using: ${user.email}\nDate: ${dateString}\n\nWe are delighted to have you.\n\nWarm Regards,\nAhmad Cloths House Team`,
      });
    } catch (mailErr) {
      console.error(
        "AHMADCLOTHS MAIL ERROR: Transmission failed for signup notification.",
        mailErr.message,
      );
    }

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    let message = err.message;
    if (err.code === 11000) {
      message =
        "This identity (email) already exists in the Ahmadcloths community.";
    }
    res.status(400).json({ success: false, error: message });
  }
};

// @desc    Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Credentials" });
    }
    const token = generateToken(user._id);

    // Send Login Notification
    try {
      const loginTime = new Date().toLocaleString();
      await sendEmail({
        email: user.email,
        subject: "Ahmadcloths Security: Login Authentication",
        message: `Hello ${user.name},\n\nSomeone recently authenticated your Ahmadcloths House account.\n\nDate: ${loginTime}\nLocation: Lahore, PK (Approximate)\n\nIf this wasn't you, please reset your Secure Password immediately.`,
      });
    } catch (mailErr) {
      console.error(
        "AHMADCLOTHS MAIL ERROR: Transmission failed for login notification.",
        mailErr.message,
      );
    }

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Forgot password
exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });

    // Create Reset Token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    const resetUrl = `https://shop.bytely.ai/reset-password/${resetToken}`;

    // Send Reset Email
    try {
      await sendEmail({
        email: user.email,
        subject: "Ahmadcloths Security: Password Recovery Protocol",
        message: `Hello ${user.name},\n\nYou requested a Password Recovery Protocol.\n\nPlease follow this secure link to establish a new Secure Password:\n\n${resetUrl}\n\nThis transmission expires in 10 minutes.`,
      });

      res
        .status(200)
        .json({ success: true, data: "Password Recovery Transmission Sent." });
    } catch (mailErr) {
      console.error(
        "AHMADCLOTHS MAIL ERROR: Transmission failed for forgot password.",
        mailErr.message,
      );
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      res.status(500).json({
        success: false,
        error: "Email Transmission Blocked. Protocol Aborted.",
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Reset password
exports.resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res
        .status(400)
        .json({ success: false, error: "Invalid or Expired Token" });

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ success: true, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
// @desc    Get all users (Admin only)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("+password");
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Update user
exports.updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });

    user = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ success: false, error: "User not found" });

    await user.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Google Login
exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    let payload;

    // Detect if it's an Access Token (OAuth2) or ID Token (JWT)
    if (credential.startsWith("ya29.")) {
      console.log("[GOOGLE AUTH] Access Token detected. Fetching profile...");
      const axios = require("axios");
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credential}`,
      );
      payload = response.data;
    } else {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      payload = ticket.getPayload();
    }

    const { email, name, sub, picture } = payload;

    console.log(`[GOOGLE AUTH] Attempting login for: ${email}`);
    let user = await User.findOne({
      $or: [{ googleId: sub }, { email: email }],
    });

    if (!user) {
      // Create new user if not found
      user = await User.create({
        name,
        email,
        googleId: sub,
        profilePicture: picture,
        password: crypto.randomBytes(16).toString("hex"), // Secure random password
        role: "user",
      });
    } else {
      // Update existing user with Google info if missing
      const updates = {};
      if (!user.googleId) updates.googleId = sub;
      if (!user.profilePicture) updates.profilePicture = picture;

      if (Object.keys(updates).length > 0) {
        user = await User.findByIdAndUpdate(
          user._id,
          { $set: updates },
          { new: true },
        );
      }
    }

    const token = generateToken(user._id);

    // Optional: Send Login Notification
    try {
      await sendEmail({
        email: user.email,
        subject: "Ahmadcloths Security: Google Account Authentication",
        message: `Hello ${user.name},\n\nYou successfully authenticated your Ahmadcloths House account via Google.\n\nDate: ${new Date().toLocaleString()}\nLocation: Lahore, PK\n\nEnjoy your shopping.`,
      });
    } catch (mErr) {
      console.error("Email failed during Google Login:", mErr.message);
    }

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error("--- GOOGLE AUTH ERROR ---");
    console.error("Message:", err.message);
    console.error("Stack Trace:", err.stack);

    // Detailed error logging for debugging
    if (err.name === "ValidationError") {
      console.error("Validation Errors:", err.errors);
    }

    // Check for specific error types (e.g., token expiration, invalid client id)
    let errorMessage = "Google Authentication Failed";
    if (err.message.includes("Token used too late")) {
      errorMessage = "Session Expired. Please try logging in again.";
    } else if (err.message.includes("audience mismatch")) {
      errorMessage = "Internal Auth Protocol Mismatch. Check Client ID.";
    } else if (err.code === 11000) {
      errorMessage = "This identity is already registered with another method.";
    }

    res.status(401).json({ success: false, error: errorMessage });
  }
};
