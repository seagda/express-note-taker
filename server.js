// import packages
const express = require("express");
const fs = require("fs");
const path = require("path");

// connect to local db file 
const dbPath = path.join(__dirname, "db/db.json");

// setup the express server
const app = express();
const PORT = process.env.PORT || 8080;

// configure data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// add error handling
const sendError = (err, res) => {
    if (err) {
        console.error(err);
        if (!res.headersSent) res.status(500).send({message: "Server error."});
        res.end();
        return false;
    }
    return true;
};

// TODO: setup routes

// start server
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }
    console.log(`Notetaker app listening on port ${PORT}`);
});