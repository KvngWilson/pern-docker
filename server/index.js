require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./dbConfig");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://frontend:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type"],
  })
);

const PORT = process.env.PORT || 9000;

const getProducts = (req, res) => {
  pool.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving products");
    }
    res.status(200).json(result.rows);
  });
};

app.get("/", (req, res) => {
  res.send("Dockerized Pern App");
});

app.get("/products", getProducts);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
