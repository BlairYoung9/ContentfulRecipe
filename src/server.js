var express = require("express");
var app = express();
var path= require("path");


app.use(express.json());

app.use(express.static("../build"));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "..", "build"), "index.html")
})

app.listen(8080);