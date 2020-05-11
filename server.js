
// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const app = require("./lib/app");
// Sets up the Express App
// =============================================================
const server = express();
const PORT = process.env.PORT || 3000;

// Array to hold all created employees
const employees = [
];


// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// Declare folder to be able to access from files
server.use('/Assets', express.static(__dirname + "/Assets"));

// Get path for the index page
server.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
});

// Get path for the team page
server.get("/pages/team", (req,res) =>{
    res.sendFile(path.join(__dirname, "/pages/team.html"));

});

// get path to return the employees json obj
server.get("/api/employees", function(req, res) {
    return res.json(employees);
});

// get path to return specific employee json obj
server.get("/api/employees/:employeeId", (req, res)=>{
    const employeeId = req.params.employeeId;
    for(const currentEmployee of employees)
        if(employeeId === currentEmployee.id)
            return res.json(currentEmployee);

    return res.json(false);
});

// post path to create the teamfile
server.post("/create/teamFile", (req,res) =>{
    app.createFile(employees);
});

// post path the create a new employee and push into the employee array
server.post("/api/employees", function(req, res) {
    const newEmployee = req.body;
    employees.push(app.createGUIEmployee(newEmployee)); 
});

// Post path to update the employee information
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

// Post path to delete a employee object
server.post("/api/delete/employee", function(req, res) {
    const employeeInfo = req.body;
    for(let i = 0; i < employees.length; i++)
    {
        console.log(employeeInfo.id);
        console.log(employees[i]);
        console.log(employeeInfo.id == employees[i].id);
        if(employeeInfo.id == employees[i].id)
            employees.splice(i,1);
    }
});

// get path to return error page if user tries to traverse to anything else
server.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "/pages/page-not-found.html"));
});


// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});