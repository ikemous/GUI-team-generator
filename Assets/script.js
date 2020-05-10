$("#delete").on("click", event =>{
    const employeeId = $("#employee-id").val();
    $.post("/api/delete/employee", employeeId).then(updateList());

});

$("#update").on("click", event=>{
    const employeeInfo = {
        id:  $("#employee-id").val(),
        email:  $("#employee-email").val(),
        extraInfo:  $("#employee-extra").val()
    }

    $.post("/api/update/employee", employeeInfo).then(updateList());
})

$("#add").on("click", function(event){
    event.preventDefault();
    const employeeInfo = {
        name: $("#employeeName").val().trim(),
        id: $("#employeeID").val().trim(),
        email: $("#employeeEmail").val().trim(),
        extraInfo: $("#employeeExtraInfo").val().trim(),
        employeeRole: $("#employeeRole").val()
    }

    $("#employeeName").val("");
    $("#employeeID").val("");
    $("#employeeEmail").val("");
    $("#employeeExtraInfo").val(""); 

    $.post("/api/employees", employeeInfo).then(updateList());

});

$("#employeeList").on("click", ".listBtn ", event =>{
    const employeeId = $(event.target).data("id");
    // const id = $("#employee-id").attr("data-id");
    $.get("/api/employees/" + employeeId, function(employee){
        console.log(employee);
        $("#employee-name").text(employee.name);
        $("#employee-role").val(employee.role);
        $("#employee-id").val(employee.id);
        $("#employee-email").val(employee.email);
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
        // $("#employee-extra").text(employee.extraInfo);
    });
});

$("#finish").on("click", event =>{

    $.get("/team", function(){

    });
});

function updateList()
{
    $.get("/api/employees", function(employees){
        const list = $("#employeeList");
        list.html("");
        for(const employee of employees)
        {
            const newListItem = $("<li>");
            newListItem.addClass("list-group-item");
            newListItem.text(`${employee.name} - ${employee.role}`);
            list.append(newListItem);
            
            const listSpan = $("<span>");
            listSpan.addClass("pull-right");
            newListItem.append(listSpan);

            // data-toggle="modal" data-target="#editModal" data-whatever="@getbootstrap"

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
}

$("#employeeRole").on("click", function(){
    console.log($("#employeeRole").val());
    switch($("#employeeRole").val())
    {
        case "Manager":
            $("#specialInfo").text("Office Number");
            $("#employeeExtraInfo").attr("placeholder", "1,2,3");
            break;
        case "Engineer":
            $("#specialInfo").text("GitHub Username");
            $("#employeeExtraInfo").attr("placeholder", "ikemous");
            break;
        case "Intern":
            $("#specialInfo").text("School Name");
            $("#employeeExtraInfo").attr("placeholder", "UofU/University Of Utah");
            break;
        default:
            break;
    }
});

updateList();