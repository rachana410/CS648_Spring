window.addEventListener("load",()=>{
    "use strict";   
    window.document.getElementById("empForm").addEventListener("submit", (e)=> {
        e.preventDefault();
        window.console.log("ID:" + window.document.getElementById("emp_id").value);
        window.console.log("Name:" + window.document.getElementById("emp_id").value);
        window.console.log("Extension:" + window.document.getElementById("ext").value);
        window.console.log("Email:" + window.document.getElementById("emp_email").value);
        window.console.log("Department:" + window.document.getElementById("emp_dept").value);      
    });
  });