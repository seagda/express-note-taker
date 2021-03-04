// Step 1: import  packages
const express = require("express");
const fs = require("fs");
const path = require("path");

// Step 2. connect to local db file 
const dbPath = path.join(__dirname, "db/db.json");

// Step 3: configure the server
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Step 4. TODO: setup routes

// Step 5. start server
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }
    console.log(`Notetaker app listening on port ${PORT}`);
});