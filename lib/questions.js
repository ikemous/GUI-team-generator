
const inquirer = require("inquirer");

/**
 *      promptEmployeeQuestions()
 * Purpose: prompt the user for basic employee information
 * Parameters: None
 * Return: obj of the answers given from the user
 */
function promptEmployeeQuestions()
{
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is thier employee ID?"
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "What is the employee email?"
        }
    ]);

}//End promptEmployeeQuestions()

/**
 *      promptRole()
 * Purpose: prompt the user to see what role the employee has
 * Parameters: None
 * Return: obj of the answer from the prompt choices
 */
function promptRole()
{
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeRole",
            message: "What is the employees role?",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ])
}//End promptRole()

/**
 *      promptEngineerQuestion()
 * Purpose: prompt the user for the Engineers github username
 * Parameters: None
 * Return: obj of the answer from the prompt question
 */
function promptEngineerQuestion()
{
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeGitHub",
            message: "What is the employees github username?"
        },
    ]);
}//End promptEngineerQuestion()

/**
 *      promptInternQuestion()
 * Purpose: prompt the user for the interns school name
 * Parameters: None
 * Return: obj of the answer from the prompt question
 */
function promptInternQuestion()
{
    return inquirer.prompt([
        {
            type: "input",
            name: "internSchoolName",
            message: "What school is the intern attending?"
        }    
    ]);
}//End promptInternQuestion()

/**
 *      promptVerifyInformation()
 * Purpose: prompt the user for the managers office number
 * Parameters: None
 * Return: obj of the answer from the prompt question
 */
function promptManagerQuestion()
{
    return inquirer.prompt([
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the managers office number?"
        }
    ]);
}//End promptManagerQuestion()

/**
 *      promptVerifyInformation()
 * Purpose: prompt the user if the information displayed is correct
 * Parameters: None
 * Return: True for the answer yes and False for the answer no
 */
function promptVerifyInformation()
{
    return inquirer.prompt([
        {
            type: "list",
            name: "verified",
            message: "Does the employee information look correct?",
            choices: ["yes", "no"]
        }
    ]).then(answers => {
        if(answers.verified === "yes")
            return true;
        return false;
    });
}//end promptVerifyInformation()

/**
 *      promptForContinue()
 * Purpose: prompt the user if they want to continue adding more employees
 * Parameters: None
 * Return: True for the answer yes and False for the answer no
 */
function promptForContinue()
{
    return inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "Do you want to add another employee?",
            choices: ["yes", "no"]
        }
    ]).then(answers => {
        if(answers.continue === "yes")
            return true;
        return false;
    });
}//End promptForContinue()

module.exports ={
    promptEmployeeQuestions,
    promptRole,
    promptEngineerQuestion,
    promptInternQuestion,
    promptManagerQuestion,
    promptVerifyInformation,
    promptForContinue
};