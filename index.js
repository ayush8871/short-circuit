var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("This is my file");
});

var PORT = process.env.PORT || 5000;

app.listen(PORT);