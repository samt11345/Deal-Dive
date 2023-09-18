const express = require("express");
const app = express();
const debug = require('debug')('app');

app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
    res.render("upload");
});

app.listen(3001);
debug("3001 is the port");