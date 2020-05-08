//Import Employee class
const Employee = require("./Employee");

//Create Manager class using the Employee class
class Manager extends Employee
{
    /**
     * 
     * @param {Employee Name} name 
     * @param {Employee ID} id 
     * @param {Employee Email} email 
     * @param {Employee Office Number} officeNumber 
     */
    constructor(name, id, email, officeNumber)
    {
        //Send information to the Employee class
        super(name, id, email);
        //Initialize office number
        this.officeNumber = officeNumber;
        //Initialize Employee Role
        this.role = "Manager";

    }//End Manager constructor()
    
    /**
     * getOfficeNumber()
     * Purpose: To grab the office number of the Employee from the Manager Class
     * Parameters: None
     * Return: this.officeNumber - employees office number from the Manager Class
     */
    getOfficeNumber()
    {
        return this.officeNumber;
    }//end getOfficeNumber()

};//End Manager Class

//Allow Manager class to be exported
module.exports = Manager;