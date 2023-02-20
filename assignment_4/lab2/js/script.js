// CREATE AN ARRAY OF EMPLOYEES
var emp_arr = [
    [12345678, "Rachana Gandhi", 1234, "rgandhi9908@sdsu.edu", "Engineering"],
    [23456789, "Chetna Nainani", 2345, "cnainani8802@sdsu.edu", "Engineering"],
    [34567891, "Mukta Joshi", 7877, "mjoshi2669@sdsu.edu", "Sales"],
    [45678910, "Shivani Singh", 4567, "ssingh8463@sdsu.edu", "Marketing"],
    [56789101, "Aditi Mewada", 5245, "amewada@sdsu.edu", "Quality Assurance"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if (localStorage.getItem('employees') !== null) { emp_arr = JSON.parse(localStorage.getItem('employees'))}

// GET DOM ELEMENTS
var form        = window.document.getElementById('addForm')
var emp_count    = window.document.getElementById('empCount')
var emp_table    = window.document.getElementById('empTable')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let emp_id       = parseInt(window.document.getElementById('id').value)
    let emp_name     = window.document.getElementById('name').value
    let emp_ext      = parseInt(window.document.getElementById('extension').value)
    let emp_email    = window.document.getElementById('email').value
    let emp_dept     = window.document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let emp_arr_new = [emp_id, emp_name, emp_ext, emp_email, emp_dept]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    emp_arr.push(emp_arr_new)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
});

// DELETE EMPLOYEE
emp_table.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE 
        if(confirm("Are you sure you want to delete this employee?")){
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)  
            let row_ind = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            emp_arr.splice(row_ind - 1, 1)
            // BUILD THE GRID
            buildGrid()
        }
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    emp_table.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let t_body = window.document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let emp of emp_arr) {
        t_body.innerHTML += 
        `
        <tr><td>${emp[0]}</td><td>${emp[1]}</td><td>${emp[2]}</td>
            <td>${emp[3]}</td><td>${emp[4]}</td>
            <td><button class="btn btn-xs btn-danger delete">X</button></td></tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    emp_table.appendChild(t_body)
    // UPDATE EMPLOYEE COUNT
    emp_count.value = `(${emp_arr.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(emp_arr))
};