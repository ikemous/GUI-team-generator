//Dependencies
const path = require("path");
const fs = require("fs");
//File Path
const templatesDir = path.resolve(__dirname, "../templates");

/**
 * render()
 * Purpose: To order employee classes and create the HTML page with the employees
 * Parameters: employees - array of several employee classes
 * Return: renderMain - HTML string with the team page completed
 *  */
const render = employees => {
  //Array to hold filtered employee classes
  const filteredEmployees = [];

  //Filter for Manager Employee Classes
  employees.filter(employee => {
      if(employee.getRole() === "Manager")
        filteredEmployees.push(employee);
  });
  //Filter For Engineer Employee Classes
  employees.filter(employee => {
      if(employee.getRole() === "Engineer")
        filteredEmployees.push(employee);
  });
  //Filter For Intern Employee Classes
  employees.filter(employee => {
      if(employee.getRole() === "Intern")
        filteredEmployees.push(employee);
  });
 
  //array to hold all employee html cards
  const html = [];

  //Go through each employee and create html cards
  filteredEmployees.forEach(employee => {
    switch(employee.getRole())
    {
      case "Manager":
        html.push(renderManager(employee));
        break;
      case "Engineer":
        html.push(renderEngineer(employee));
        break;
      case "Intern":
        html.push(renderIntern(employee));
        break;
    }
  });

  //Render HTML page with all the cards created
  return renderMain(html.join(""));

};//end render()

/**
 * renderManager()
 * Purpose: To use Manager Template and create Manager Card
 * Parameters: manager - Manager class object
 * Return: template - HTML code with manager card details
 */
const renderManager = manager => {
  //Read manager html file and store into a variable
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  //Replace name placeholder
  template = replacePlaceholders(template, "name", manager.getName());
  //Replace role placeholder
  template = replacePlaceholders(template, "role", manager.getRole());
  //Replace email placeholder
  template = replacePlaceholders(template, "email", manager.getEmail());
  //replace id placeholder
  template = replacePlaceholders(template, "id", manager.getId());
  //replace officeNumber placeholders
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  //Return manager card
  return template;
};//End renderManager()

/**
 * renderEngineer()
 * Purpose: To use Engineer Template and create Engineer Card
 * Parameters: engineer - Engineer class object
 * Return: template - HTML code with engineer card details
 */
const renderEngineer = engineer => {
  //Read engineer template and store into a variable
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  //Replace name placeholder
  template = replacePlaceholders(template, "name", engineer.getName());
  //Replace role placeholder
  template = replacePlaceholders(template, "role", engineer.getRole());
  //Replace email placeholder
  template = replacePlaceholders(template, "email", engineer.getEmail());
  //Replace id placeholder
  template = replacePlaceholders(template, "id", engineer.getId());
  //Replace github username placeholder
  template = replacePlaceholders(template, "github", engineer.getGithub());
  //Return intern card
  return template;
};//renderEngineer()

/**
 * renderIntern()
 * Purpose: To use Intern Template and create Engineer Card
 * Parameters: intern - Intern class object
 * Return: template - HTML code with intern card details
 */
const renderIntern = intern => {
  //Read intern templace file and store into a variable
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  //Replace name placeholder
  template = replacePlaceholders(template, "name", intern.getName());
  //Replace role placeholder
  template = replacePlaceholders(template, "role", intern.getRole());
  //Replace email placeholder
  template = replacePlaceholders(template, "email", intern.getEmail());
  //Replace id placeholder
  template = replacePlaceholders(template, "id", intern.getId());
  //Replace school placeholder
  template = replacePlaceholders(template, "school", intern.getSchool());
  //Return intern card
  return template;
};//renderIntern()

/**
 * RenderIntern()
 * Purpose: To return html file with team cards
 * Parameters: html - html cards with all the different employees
 * Return: returnPlaceholders() - replaces the team placeholder using html
 */
const renderMain = html => {
  //Read main template and store into a variable
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  //return placeholder for the team using html
  return replacePlaceholders(template, "team", html);
};//renderMain()

/**
 * replacePlaceholders()
 * Purpose: To replace a placeholder from a designated template
 * Parameters: template - template html with placeholders
 *             placeholder - designated placeholder to be replaced
 *             value - value used to replace the placeholder
 * Return: returnPlaceholders() - replaces the team placeholder using html
 */
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};//end replacePlaceholders()

//Make render function usable by other scripts
module.exports = render;
