import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/schools", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM schools");
    res.status(200).json({ data: rows });
  } catch (err) {
    console.error("Error fetching schools:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/schools", async (req, res) => {
  try {
    const { name, email, contact, address, city, state, pinCode, image } =
      req.body;
    await pool.query(
      `INSERT INTO schools (name,email,contact,address,city,state,pinCode,image) 
       VALUES (?,?,?,?,?,?,?,?)`,
      [name, email, contact, address, city, state, pinCode, image]
    );
    res.status(201).json({ message: "School added successfully" });
  } catch (err) {
    console.error("Error adding school:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
