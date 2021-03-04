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

// call filesystem to update the db.json file
const updateDbfile = (res, sendUpdate) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (sendError(err, res)) fs.writeFile(dbPath, JSON.stringify(sendUpdate(JSON.parse(data))), err => sendError(err, res));
    })
};

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

// TODO: setup API routes for data

// TODO: get route for READING notes
app.get(

);

// TODO: post route for CREATING a note
app.post(

);

// TODO: delete route for DELETING a note

app.delete(

);

// setup HTML routes for responding to http requests
app.get("/notes", (res) => res.sendFile(path.join(__dirname, "public/notes.html")));

// redirect all random urls to the index 
app.get("/*", (res) => res.sendFile(path.join(__dirname, "public/index.html")));


// start server
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }
    console.log(`Notetaker app listening on port ${PORT}`);
});