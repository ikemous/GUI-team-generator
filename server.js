
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const app = require("./app")
// Sets up the Express App
// =============================================================
const server = express();
const PORT = 3000;


// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("output"));

// Basic route that sends the user first to the AJAX Page
server.get("/", function(req, res) {
    
    //Intialize 
    // app.init();
    res.sendFile(path.join(__dirname, "index.html"));
});

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});