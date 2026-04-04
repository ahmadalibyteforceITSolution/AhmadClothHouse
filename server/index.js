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

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Ahmadcloths MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

app.get("/", (req, res) => res.send("Ahmadcloths Backend v1.0 running..."));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/products", require("./routes/product"));
app.use("/api/orders", require("./routes/order"));
app.use("/api/traffic", require("./routes/traffic"));

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`🚀 Ahmadcloths Server on Port ${PORT}`));
}

module.exports = app;
