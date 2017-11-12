var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("I am ruunning on port " + process.env.PORT);
});

var PORT = process.env.PORT || 5000;

app.listen(PORT);