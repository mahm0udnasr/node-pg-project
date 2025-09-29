import express from "express";
import pool from "./config/db.js";

const app = express();
const port = 4001;
app.use(express.json());

app.get("/setup-table", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(200) UNIQUE, password VARCHAR(200))"
    );
    res
      .status(201)
      .json({ success: true, message: "table created successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
