
const setView = function(e) {
    e.preventDefault();
    $('#contentArea').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('#contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }
}


const addContact = function(e) {
    const newContact = {
        name: document.forms.newname,
        officeNum: document.forms.newoffice,
        phoneNum: document.forms.newphone
    }
    employeeList.push(newContact);

}

const setAdd = function(e) {
    e.preventDefault();
    $('#contentArea').empty();
    
    $('#contentArea').html(`<form name ="addForm">Name: <input type="text" name="newname">Office Number: <input type="text" name="newoffice">Phone Number: <input type="text" name="newphone"><input type ="button" id="addContact" class="btn" value="+" onclick="addContact"></form>`);

    for (let i = 0; i < employeeList.length; i++) {
        $('#contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }
}





const setVerify = function(e) {
    e.preventDefault();
    $('#contentArea').empty();

}




const setUpdate = function(e) {
    e.preventDefault();
    $('#contentArea').empty();

}




const setDelete = function(e) {
    e.preventDefault();
    $('#contentArea').empty();

}


//event listeners
$('.view').on('click', setView);
$('.add').on('click', setAdd);
$('.addContact').on('click', addContact);
$('.verify').on('click', setVerify);
$('.update').on('click', setUpdate);
$('.delete').on('click', setDelete);