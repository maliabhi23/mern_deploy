const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
