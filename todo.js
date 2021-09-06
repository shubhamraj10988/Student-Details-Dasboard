var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["College"] = document.getElementById("College").value;
    formData["Profession"] = document.getElementById("Profession").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Details").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Gender;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.College;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Profession;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .btn {
      background-color: red;
      border: none;
      border-radius:12rem;
      color: white;
      padding: 12px 16px;
      font-size: 16px;
      cursor: pointer;
    }
    
    /* Darker background on mouse-over */
    .btn:hover {
      background-color: RoyalBlue;
    }
    </style>
    </head><a onClick="onEdit(this)"><button class="btn"><i class="fa fa-bars"></i></button></a>
                       <a onClick="onDelete(this)"><button class="btn"><i class="fa fa-trash"></i></button></a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("College").value = "";
    document.getElementById("Profession").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[1].innerHTML;
    document.getElementById("College").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Profession").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Gender;
    selectedRow.cells[2].innerHTML = formData.College;
    selectedRow.cells[3].innerHTML = formData.Profession;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Details").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}