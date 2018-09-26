



const setView = function(e) {
    e.preventDefault();
    $('#contentArea').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('#contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }
}


const setAdd = function(e) {
    e.preventDefault();
    $('#contentArea').empty();
    
    for (let i = 0; i < employeeList.length; i++) {
        $('#contentArea').append(`<div class="content-row"><div class="col-md-6" id="viewcell" value=${i}> Name: ${employeeList[i].name}<br><br> Office: ${employeeList[i].officeNum}<br><br> Phone: ${employeeList[i].phoneNum}</div><div class="col-md-6" id="spacercell"></div>`);
    }

    const addContact = function(e) {
        
        const newContact = {
            name: $("#newname").val(),
            officeNum: parseInt($("#newoffice").val()),
            phoneNum: $("#newphone").val()
            }
        employeeList.push(newContact);
        console.log(employeeList);
    }

    $('#addContact').on('click', addContact);
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

$('.verify').on('click', setVerify);
$('.update').on('click', setUpdate);
$('.delete').on('click', setDelete);