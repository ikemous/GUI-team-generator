//Create Employee Class
class Employee {
    
    /**
     * 
     * @param {Employee Name} name 
     * @param {Employee ID} id 
     * @param {Employee Email} email 
     */
    constructor(name,id,email)
    {
        //Initialize Employee Name
        this.name = name;
        //Initialize Employee ID
        this.id = id;
        //Initialize Employee Email
        this.email = email;
        //initialize Employee Role
        this.role = "Employee";
    }//End Employee Contructor()

    /**
     * getName()
     * Purpose: To grab the name of the employee object
     * Paramters: None
     * Return: this.name - empployee name from the object
     */
    getName()
    {
        //Return employee name
        return this.name;
    }//end getName()

    /**
     * getId()
     * Purpose: To grab the employee id from the Employee Class
     * Parameters: None
     * Return: this.id - employee id from the Employee Class
     */
    getId()
    {
        //Return Employee ID
        return this.id;
    }//End getId()

    /**
     * getEmail()
     * Purpose: To grab the employee email from the Employee Class
     * Paramters: None
     * Return: this.email - employee email from the Employee Class
     */
    getEmail()
    {
        //Return Employee Email
        return this.email;
    }//End getEmail()

    /**
     * getRole()
     * Purpose: To grab the employee role from the Employee Class
     * Parameters: None
     * Return: this.role - employee role from the Employee Class
     */
    getRole()
    {
        //Return employee Role
        return this.role;
    }//end getRole()

    printEmployeeInfo()
    {
        const keys = Object.keys(this);
        const values = Object.values(this);

        for(let i = 0; i < keys.length; i++)
            console.log(`${keys[i]}: ${values[i]}`)
    }

};//End Employee Class

//Make Employee Class usable in other scripts
module.exports = Employee;