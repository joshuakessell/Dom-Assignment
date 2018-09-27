



const setView = function(e) {
    e.preventDefault();
    $('.contentArea').empty();
    $('.formRow').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }
}


const setAdd = function(e) {
    e.preventDefault();
    $('.contentArea').empty();
    $('.formRow').empty();

    $('.formRow').html(`<form name ="addForm">
        Name: 
        <input type="text" id="newname" >
        Office Number: 
        <input type="text" id="newoffice">
        Phone Number: 
        <input type="text" id="newphone">
        <input type ="button" id="addContact" class="btn" value="+" onclick="addContact">
        </form>`);
    
    for (let i = 0; i < employeeList.length; i++) {
        $('.contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }

    const addContact = function(e) {
        const newContact = {
            name: $("#newname").val(),
            officeNum: parseInt($("#newoffice").val()),
            phoneNum: $("#newphone").val()
            }
        employeeList.push(newContact);
        alert(`${newContact.name} has been successfully added!`);
    }

    $('#addContact').on('click', addContact);
}





const setVerify = function(e) {
    e.preventDefault();
    $('.contentArea').empty();
    $('.formRow').empty();
    $('.formRow').html(`<form name ="verifyForm">
        Name: 
        <input type="text" id="newname">
        <input type ="button" id="setVerify" class="btn" value="Verify" onclick="setVerify">
        </form>`);
        
    const verifyContact = function(e) {
        $('.contentArea').empty();
        let nameCheck = $("#newname").val();
        let flag = true;
        for(let i=0;i<employeeList.length; i++) {
            if(nameCheck === employeeList[i].name){
                $(".contentArea").append("Yes");
                flag = false;
            }
        }
        if (flag) {
            $(".contentArea").append("No");
        }
    }  
    $('#setVerify').on('click', verifyContact);
}


const setUpdate = function(e) {
    e.preventDefault();
    $('.contentArea').empty();
    $('.formRow').empty();

    $('.formRow').html(`<form name ="updateForm">
        Employee name: 
        <input type="text" id="name" >
        New Office: 
        <input type="text" id="newoffice">
        New Phone: 
        <input type="text" id="newphone">
        <input type ="button" id="updateContact" class="btn" value="Update" onclick="updateContact">
        </form>`);

    const updateContact = function(e) {
        $('.contentArea').empty();
        let nameCheck = $("#name").val();
        let flag = true;
        for(let i=0;i<employeeList.length; i++) {
            if(nameCheck === employeeList[i].name){
                employeeList[i].officeNum = parseInt($("#newoffice").val());
                employeeList[i].phoneNum = $("#newphone").val();
                alert(`${nameCheck} has been successfully updated!`);
                flag = false;
            }
        }
        if (flag) {
            alert("No employee found by that name.");
        }
    }
    $('#updateContact').on('click', updateContact);
}




const setDelete = function(e) {
    e.preventDefault();
    $('#contentArea').empty();

}


//event listeners
$('.view').on('click', setView);
$('.add').on('click', setAdd);

$('.verify').on('click', setVerify);
$('.update').on('click', setUpdate);
$('.delete').on('click', setDelete);