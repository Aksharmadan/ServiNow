const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// BASIC MIDDLEWARE ONLY
app.use(cors());
app.use(express.json());
app.use("/api/workers", require("./routes/workerRoutes"));
app.use("/api/workers", require("./routes/workerRoutes"));
const jobRoutes = require("./routes/jobs");
app.use("/api/jobs", jobRoutes);
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// TEST ROOT
app.get("/", (req, res) => {
  res.json({ status: "ServiNow API running" });
});

// ROUTES
const workerRoutes = require("./routes/workerRoutes");
app.use("/api/workers", workerRoutes);

// DB + SERVER
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.error(err));
