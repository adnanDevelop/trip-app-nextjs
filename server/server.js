require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/connection");
const router = require("./routes/route");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(router);
app.use(express.json());

app.listen(PORT, () => {
  dbConnection();
  console.log("Server is running at port no : 5000");
});
