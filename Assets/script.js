// Click event for id: delete
// Purpose: To grab employee info and call server then update the employee list
// Server Call: post(/api/delete/employee) - to remove employee from list
$("#delete").on("click", event =>{
    //create employee object for server to reference
    const employeeInfo = {
        id:  $("#employee-id").val(),
        email:  $("#employee-email").val(),
        extraInfo:  $("#employee-extra").val()
    }
    //Call server then update list
    $.post("/api/delete/employee", employeeInfo).then(updateList());
});//end delete click event

// Click event for id: update
// Purpose: gather updated employee info and call server to update the employee
// Server Call: post(/api/update/employee) - Send new employee information and update it
$("#update").on("click", event=>{
    //gather Employee info
    const employeeInfo = {
        id:  $("#employee-id").val(),
        email:  $("#employee-email").val(),
        extraInfo:  $("#employee-extra").val()
    }
    //post call to update employee information
    $.post("/api/update/employee", employeeInfo).then(updateList());
});//end update id click event

// Click event for id: add
// Purpose: Check if employee id is being used
//          Create employee object to be passed to server
//          Reset input boxes
//          Update employee list
// Server Call: post(/api/employees) - send employee object and add to list of employees
$("#add").on("click", event =>{
    //prevent refresh default
    event.preventDefault();

    //Variable used to see if id is already being used
    let idUsed = false;
    //new user id
    let eID = $("#employeeID").val().trim();

    //Get current employee information
    $.get("/api/employees", employees =>{
        //Check all employees ids and compare ids
        for(const employee of employees)
            if(employee.id === eID)
                idUsed = true;

        //Id was not used and isnt empty
        if(idUsed === false && $("#employeeID").val().trim() != "")
        {
            //Gather Employee Information
            const employeeInfo = {
                name: $("#employeeName").val().trim(),
                id: $("#employeeID").val().trim(),
                email: $("#employeeEmail").val().trim(),
                extraInfo: $("#employeeExtraInfo").val().trim(),
                employeeRole: $("#employeeRole").val()
            }
        
            //reset all input values
            $("#employeeName").val("");
            $("#employeeID").val("");
            $("#employeeEmail").val("");
            $("#employeeExtraInfo").val(""); 
            
            //Cal server to add new employee
            $.post("/api/employees", employeeInfo).then(updateList());
        }
        else//alert that id is used or empty
        {
            alert("ID has been taken or is empty");
        }
    });
});//end add id click event

// Click event for id: employeeList listBtn class
// Purpose: To update modal with clicked employee information
// Server Call: post(/api/employees/:employee) - grab specific employee information using employee id
$("#employeeList").on("click", ".listBtn ", event =>{
    //Grab the data id attribute from the button
    const employeeId = $(event.target).data("id");
    //Grab employee information with employee id
    $.get("/api/employees/" + employeeId, function(employee){
        //Update all generic employee information
        $("#employee-name").text(employee.name);
        $("#employee-role").val(employee.role);
        $("#employee-id").val(employee.id);
        $("#employee-email").val(employee.email);
        //Grab employee specific information
        switch(employee.role)
        {
            case "Engineer":
                $("#extra-info").text("Github UserName:");
                $("#employee-extra").val(employee.github);
                break;
            case "Intern":
                $("#extra-info").text("School Name:");
                $("#employee-extra").val(employee.school);
                break;
            case "Manager":
                $("#extra-info").text("Office Number:");
                $("#employee-extra").val(employee.officeNumber);
                break;
        }
    });
});//End employeeList id listBtn class click even

// Click event for id: finish
// Purpose: to create employee file using server post 
// Server Call: post(/create/teamFile) - using internal employee array and multiple scripts to 
//              create team file
$("#finish").on("click", event =>{
    //Use server to create file
    $.post("/create/teamFile");
    //Inform user that file has been created
    alert("Team File has been created!!!!");
});// end finish id click event

/**
 * updateList()
 * Purpose: To use Jquery to create dynamic elements with empployee information
 * Parameters: None
 * Return: None
 */
function updateList()
{
    //Grab employee information from the server
    $.get("/api/employees", function(employees){
        //grab element to append list item too
        const list = $("#employeeList");
        //Cleat list elements
        list.html("");
        //Go through all employees
        for(const employee of employees)
        {
            //create list item
            const newListItem = $("<li>");
            newListItem.addClass("list-group-item");
            newListItem.text(`${employee.name} - ${employee.role}`);
            list.append(newListItem);
            
            //Create Span to hold button
            const listSpan = $("<span>");
            listSpan.addClass("pull-right");
            newListItem.append(listSpan);

            //Create edit button for the list item
            const listItemButton = $("<button>");
            listItemButton.attr("data-id", employee.id);
            listItemButton.attr("data-toggle", "modal");
            listItemButton.attr("data-target", "#editModal");
            listItemButton.attr("data-whatever", "@getbootstrap");
            listItemButton.text("Edit");
            listItemButton.addClass("btn btn-primary btn-sm listBtn");
            listSpan.append(listItemButton);
        }
    });
}//end updateList()

// Click event for id: employeeRole
// Purpose: To update employee specific input box
// Server Call: None
$("#employeeRole").on("click", event=>{ 
    //Switch statement using employee role value
    switch($("#employeeRole").val())
    {
        //Update input to office number
        case "Manager":
            $("#specialInfo").text("Office Number");
            $("#employeeExtraInfo").attr("placeholder", "1,2,3");
            break;
            //Update input to github username
        case "Engineer":
            $("#specialInfo").text("GitHub Username");
            $("#employeeExtraInfo").attr("placeholder", "ikemous");
            break;
            //Update input to school name
        case "Intern":
            $("#specialInfo").text("School Name");
            $("#employeeExtraInfo").attr("placeholder", "UofU/University Of Utah");
            break;
        default:
            break;
    }
});//end employeerole id click event

//Update list on page load
updateList();