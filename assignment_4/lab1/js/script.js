// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = window.document.getElementById('addForm');
var emp_list = window.document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = 0;
var emp_cnt = window.document.getElementById("empCount");


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let emp_id = window.document.getElementById('id').value;
    let emp_name = window.document.getElementById('name').value;
    let emp_extension = window.document.getElementById('extension').value;
    let emp_email = window.document.getElementById('email').value;
    let emp_department = window.document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let emp_row = emp_list.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let emp_id_cell = emp_row.insertCell(0);
    let emp_name_cell = emp_row.insertCell(1);
    let emp_extension_cell = emp_row.insertCell(2);
    let emp_email_cell = emp_row.insertCell(3);
    let emp_department_cell = emp_row.insertCell(4);
    let emp_remove_cell = emp_row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    emp_id_cell.appendChild(window.document.createTextNode(emp_id));
    emp_name_cell.appendChild(window.document.createTextNode(emp_name));
    emp_extension_cell.appendChild(window.document.createTextNode(emp_extension));
    emp_email_cell.appendChild(window.document.createTextNode(emp_email));
    emp_department_cell.appendChild(window.document.createTextNode(emp_department));

    // CREATE THE DELETE BUTTON
    let emp_remove = window.document.createElement('button');
    emp_remove.setAttribute("onclick", "emp_remove_row(this)");
    emp_remove.appendChild(window.document.createTextNode('X'));
    emp_remove.className = 'btn-xs btn btn-danger';
    emp_remove_cell.appendChild(emp_remove);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count +=1
    emp_cnt.innerHTML = "("+count+")";

});

// DELETE EMPLOYEE

let emp_remove_row = function (emp_remove) {
    if(confirm("Are you sure you want to delete this employee?")){
        let row = emp_remove.parentNode.parentNode;
        emp_list.deleteRow(row.rowIndex);
        count-=1;
        emp_cnt.innerHTML = "("+count+")";
    }

}





