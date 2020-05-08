// Imported Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");
const render = require("./lib/htmlRenderer");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//Initialize array to hold all employees
const employees = [];

/**
 *      createEmployee()
 * Purpose: Create an Employee class with the information given in the parameters
 * Parameters: answers - obj of user answers containing employee information
 *             role - string of the employees role
 * Return: newEmployee - Employee subclass depending on which role was provided inside the parameter
 */
async function createEmployee(answers, role)
{
    //Initialize employee to be given an Employee Class
    let newEmployee;
    //Check which role the employee is placed under
    switch(role)
    {
        ///Employee is an engineer
        case "Engineer":
            //Prompt user for the Engineer question and combine the answers
            Object.assign(answers, await questions.promptEngineerQuestion());
            //Assign the new employee as an Engineer
            newEmployee = new Engineer(...Object.values(answers));
            break;
        //Employee is an Intern
        case "Intern":
            //Prompt user for the Engineer question and combine the answers
            Object.assign(answers, await questions.promptInternQuestion());
            //Assign the new employee as an Intern
            newEmployee = new Intern(...Object.values(answers));
            break;
            //Emplyee is an Manager
        case "Manager":
            //Prompt user for the Engineer question and combine the answers
            Object.assign(answers, await questions.promptManagerQuestion());
            //Assign the new employee as an Manager
            newEmployee = new Manager(...Object.values(answers));
            break;
        default:
            break;
    }//End Checking Employee Role

    //Return the employee Class
    return newEmployee;

}//End createEmployee()


/**
 *      init()
 * Purpose: To initialize creation of the employees index.html using the prompt functions to ask the user questions
 * Parameters: None
 * Return: None
 */
async function init()
{
    //declare variable to be used for while loop
    let continueAdding = true;

    //Keep creating employees 
    while(continueAdding === true)
    {

        //Prompt General Employee Answers
        let answers = await questions.promptEmployeeQuestions();
        //As what role the employee is
        let role = await questions.promptRole();
        //Create variable to store the Employee
        let newEmployee = await createEmployee(answers, role.employeeRole);
        //Print Employee Info
        newEmployee.printEmployeeInfo();
        //Ask if the information generated is correct
        let correctInformation = await questions.promptVerifyInformation();
        //Information wasn't correct
        if(correctInformation === false)
        {
            // Line to Seperate Employee Entries
            console.log("------------------------------------------------------------------------------------");
            continue;//Go back to the beginning of the while loop
        }
        //Add the employee in the employees array
        employees.push(newEmployee);
        //Ask the user if they want to add another employee
        let addAnotherEmployee = await questions.promptForContinue();
        // Line to Seperate Employee Entries
        console.log("------------------------------------------------------------------------------------");
        //User didnt want to add another employee
        if(addAnotherEmployee === false)
            continueAdding = false;//Make continue adding false

    }//End Employee Creation 
    //Create HTML using render 
    let htmlString = render(employees)
    //Create index.html file
    fs.writeFile(outputPath, htmlString, (err)=>{
        if(err)
            throw err;
        //Tell the user that the file has been created
        console.log("Employee Files Have Been Created");
    });

}//end init()

//Intialize 
// init();
module.exports = {
    init,
};