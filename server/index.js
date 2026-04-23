const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const compression = require("compression");

const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use((req, res, next) => {
  console.log(`📡 [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://shop.bytely.ai",
  "https://ahmadclotheshouse.vercel.app",
  "https://ahmad-cloths.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      // Allow any *.vercel.app domain (preview deployments + production)
      if (ALLOWED_ORIGINS.includes(origin) || /\.vercel\.app$/.test(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("📡 [DB]: Using existing connection");
    return cached.conn;
  }

  if (!process.env.MONGO_URI) {
    console.error("❌ CRITICAL: MONGO_URI is not defined!");
    throw new Error("MONGO_URI_MISSING");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 1000000,
      socketTimeoutMS: 45000,
      family: 4,
      maxPoolSize: 2,
    };

    console.log("📡 [DB]: Initiating new connection...");
    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
      console.log("✅ [DB]: MongoDB Connected Successfully");
      return mongoose;
    }).catch(err => {
      console.error("❌ [DB]: Connection Error:", err.message);
      cached.promise = null;
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

app.use(async (req, res, next) => {
  try {
    console.log(`📡 [DB_WAIT]: Ensuring connection for ${req.url}...`);
    await connectDB();
    next();
  } catch (err) {
    const errorMsg = err.message || "Unknown Connection Error";
    console.error("💀 [DB_FAILURE]:", errorMsg);

    res.status(500).json({
      success: false,
      error: "Boutique Database Offline",
      message: errorMsg,
      remedy: "Check Vercel Env Vars for MONGO_URI"
    });
  }
});

// Diagnostic route to check env status and provide public IP for Atlas whitelisting
app.get("/api/debug-setup", async (req, res) => {
  let publicIp = "Unknown";
  try {
    const axios = require("axios");
    const response = await axios.get("https://api.ipify.org?format=json", { timeout: 3000 });
    publicIp = response.data.ip;
  } catch (e) {
    publicIp = "Could not detect";
  }

  const mongoUri = process.env.MONGO_URI || "";
  res.json({
    hasMongoUri: !!process.env.MONGO_URI,
    mongoHost: mongoUri.split('@')[1] || "None",
    connectionState: mongoose.connection.readyState,
    hasBlobToken: !!process.env.BLOB_READ_WRITE_TOKEN,
    publicIp: publicIp,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    tip: "If MongoDB times out, ensure this public IP is whitelisted in MongoDB Atlas Network Access."
  });
});

app.get("/", (req, res) => res.send("AhmadClothesFabrics Backend v1.0 running..."));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/products", require("./routes/product"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/traffic", require("./routes/traffic"));
app.use("/api/monetization", require("./routes/monetization"));
app.use("/api/reviews", require("./routes/review"));

// Dynamic ads.txt for Google AdSense
app.get("/ads.txt", async (req, res) => {
  try {
    const Monetization = require("./models/Monetization");
    const settings = await Monetization.findOne();
    if (settings && settings.publisherId) {
      const pubId = settings.publisherId.replace("ca-", ""); // Ensure clean ID
      res.type("text/plain");
      res.send(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0`);
    } else {
      res.status(404).send("AdSense not configured yet.");
    }
  } catch (err) {
    res.status(500).send("Error generating ads.txt");
  }
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Ahmadcloths Server on Port ${PORT}`);
    console.log(`Welcome to AhmadClothesHouse API`);
  });
}

module.exports = app;
