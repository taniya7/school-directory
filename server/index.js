import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed : ", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.get("/schools", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM schools");
  res.status(200).json({ data: rows });
});

app.post("/schools", async (req, res) => {
  const { name, email, phone, address, city, state, zipCode, image } = req.body;
  await pool.query(
    `INSERT INTO schools (name,email,phone,address,city,state,zipCode,image) 
     VALUES (?,?,?,?,?,?,?,?)`,
    [name, email, phone, address, city, state, zipCode, image]
  );
  res.status(201).json({ data: "School added" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
