const express = require("express");
const { request } = require("http");
const app = express();
app.use(express.json());

//Route import
const product = require("./routes/productRoute");

app.use("/api/v1",product);


module.exports = app; 

