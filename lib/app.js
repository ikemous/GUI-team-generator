// Imported Dependencies
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const path = require("path");
const fs = require("fs");
const render = require("./htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "../pages");
const outputPath = path.join(OUTPUT_DIR, "team.html");


/**
 *      createEmployee()
 * Purpose: Create an Employee class with the information given in the parameters
 * Parameters: answers - obj of user answers containing employee information
 *             role - string of the employees role
 * Return: newEmployee - Employee subclass depending on which role was provided inside the parameter
 */
function createGUIEmployee(employeeInfo)
{
    let newEmployee;
    //Check which role the employee is placed under
    switch(employeeInfo.employeeRole)
    {
        ///Employee is an engineer
        case "Engineer":
            newEmployee = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.extraInfo);
            break;
        //Employee is an Intern
        case "Intern":
            newEmployee = new Intern(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.extraInfo);
            break;
            //Emplyee is an Manager
        case "Manager":
            newEmployee = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.extraInfo);
            break;
        default:
            break;
    }//End Checking Employee Role

    //Return the employee Class
    return newEmployee;

}//End createEmployee()

function createFile(employees)
{
    //Create HTML using render 
    let htmlString = render(employees);
    //Create index.html file
    fs.writeFile(outputPath, htmlString, (err)=>{
        if(err)
            throw err;
        //Tell the user that the file has been created
        console.log("Employee Files Have Been Created");
    });
}


//Allow Engineer class to be used
module.exports = {
    createGUIEmployee,
    createFile
};
