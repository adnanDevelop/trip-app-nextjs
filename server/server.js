require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./db/connection");
const router = require("./routes/route");
const PORT = 5000;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no : 5000");
});
