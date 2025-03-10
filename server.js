const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

// Environment variables (use .env file for better security)
const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST || "your-rds-endpoint";
const DB_USER = process.env.DB_USER || "your-username";
const DB_PASSWORD = process.env.DB_PASSWORD || "your-password";
const DB_NAME = process.env.DB_NAME || "your-database-name";

const app = express();
app.use(cors());
app.use(express.json());

// Create a database connection pool
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// API endpoint to fetch data
app.get("/api/data", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM your_table_name");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});