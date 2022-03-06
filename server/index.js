const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./Routes/router");
const cors = require("cors");
require("dotenv").config();



app.use(express.json());
app.use(cors());
app.use(router);
app.listen(process.env.PORT,(err) =>{
    err ? console.log(err) : console.log("Server running on port "+process.env.PORT);
});

mongoose.connect(process.env.DB, {} , (err) =>{
    err ? console.log(err) : console.log("Database Connected !!");
});