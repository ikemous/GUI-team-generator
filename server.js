
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const app = require("./lib/app");
// Sets up the Express App
// =============================================================
const server = express();
const PORT = 3000;

const employees = [
];


// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use('/Assets', express.static(__dirname + "/Assets"));

// Basic route that sends the user first to the AJAX Page
server.get("/", function(req, res) {
    //Intialize 
    res.sendFile(path.join(__dirname, "index.html"));
});

// Basic route that sends the user first to the AJAX Page
server.get("/team", function(req, res) {
    app.createFile(employees);
});

server.get("/pages/team", function(req, res){
    //Intialize 
    res.sendFile(path.join(__dirname, "/pages/team.html"));
})

// Basic route that sends the user first to the AJAX Page
server.get("/api/employees", function(req, res) {
    return res.json(employees);
});

server.get("/api/employees/:employeeId", (req, res)=>{
    const employeeId = req.params.employeeId;
    for(const currentEmployee of employees)
        if(employeeId === currentEmployee.id)
            return res.json(currentEmployee);

    return res.json(false);
});

server.post("/api/employees", function(req, res) {
    const newEmployee = req.body;
    employees.push(app.createGUIEmployee(newEmployee)); 
});

server.post("/api/update/employee", function(req, res) {
    const employeeInfo = req.body;
    for(const currentEmployee of employees)
        if(employeeInfo.id === currentEmployee.id)
        {
            currentEmployee.email = employeeInfo.email;
            switch(currentEmployee.role)
            {
                case "Manager":
                    currentEmployee.officeNumber = employeeInfo.extraInfo;
                    break;
                case "Intern":
                    currentEmployee.school = employeeInfo.extraInfo;
                    break;
                case "Engineer":
                    currentEmployee.github = employeeInfo.extraInfo;
                    break;
            }
        }
});

server.post("/api/delete/employee", function(req, res) {
    const employeeInfo = req.body;
    for(let i = 0; i < employees.length; i++)
    {
        employees.splice(i,1);
    }
});


// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});