// Import Employee Class
const Employee = require("./Employee");

//Create Employee Subclass Engineer
class Engineer extends Employee{

    /**
     * 
     * @param {Employee Name} name 
     * @param {Employee ID} id 
     * @param {Employee Email} email 
     * @param {Employee gitHub username} gitHub 
     */
    constructor(name, id, email, gitHub)
    {
        //give information to the original Employee Class
        super(name,id,email);
        //Add Employee Role
        this.role = "Engineer";
        //Add Employee Github
        this.github = gitHub;
    }//End constructor

    /**
     * getGitHub()
     * Purpose: To send back employee github usernamefrom the Engineer Class
     * Parameters: None
     * Return: this.github - employees github username from the Engineer Class
     */
    getGithub()
    {
        //Send back egineers github username
        return this.github;
    }//End getGitHub()

}//End Engineer Class

//Allow Engineer class to be used
module.exports = Engineer;