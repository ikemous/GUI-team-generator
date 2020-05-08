//import Employee.js 
const Employee = require("./Employee");

//Create Intern Class using the Employee class
class Intern extends Employee{
    
    /**
     * 
     * @param {Employee Name} name 
     * @param {Employee ID} id 
     * @param {Employee Email} email 
     * @param {Employee School} school 
     */
    constructor(name, id, email, school)
    {
        //give information to the original Employee Class
        super(name, id, email);
        //Initialize employee role
        this.role = "Intern";
        //Initialize employee school
        this.school = school;

    }//End constructor()
    
    /**
     * getSchool()
     * purpose: To get the school information from the Intern Class
     * parameters: None
     * return: this.school - grab employee school information from the Intern Class
     */
    getSchool()
    {
        return this.school;
    }//End getSchool()

};//End Intern Class

//Allow Intern class to be used
module.exports = Intern;