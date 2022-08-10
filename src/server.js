var express = require("express");
var app = express();
var path= require("path");


app.use(express.json());

app.use(express.static("../public"));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "..", "public"), "index.html")
})

app.listen(8080);