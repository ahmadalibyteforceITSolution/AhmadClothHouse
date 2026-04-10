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

app.use(
  cors({
    origin: [
      "https://shop.bytely.ai",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://ahmadclotheshouse.vercel.app",
      "https://ahmad-cloths.vercel.app",
    ],
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
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
      console.log("✅ Ahmadcloths MongoDB Connected (Serverless Cached)");
      return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.log("❌ DB Error:", e);
    throw e;
  }
  
  return cached.conn;
}

// Middleware to ensure DB connection is active before processing requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ success: false, error: "Database connection timeout or failed" });
  }
});

app.get("/", (req, res) => res.send("Ahmadcloths Backend v1.0 running..."));
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
  app.listen(PORT, () => console.log(`🚀 Ahmadcloths Server on Port ${PORT}`));
}

module.exports = app;
