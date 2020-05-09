
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const app = require("./Assets/app");
const script = require("./Assets/script");
// Sets up the Express App
// =============================================================
const server = express();
const PORT = 3000;

const employees = [

];


// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static("Assets"));

// Basic route that sends the user first to the AJAX Page
server.get("/", function(req, res) {
    
    //Intialize 
    res.sendFile(path.join(__dirname, "index.html"));
});

// Basic route that sends the user first to the AJAX Page
server.get("/team", function(req, res) {
    
    //Intialize 
    res.sendFile(path.join(__dirname, "team.html"));
});

// Basic route that sends the user first to the AJAX Page
server.get("/api/employees", function(req, res) {
    return res.json(employees);
});

server.post("/api/employees", function(req, res) {
    const newEmployee = req.body;
    employees.push(app.createGUIEmployee(newEmployee)); 
});

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});