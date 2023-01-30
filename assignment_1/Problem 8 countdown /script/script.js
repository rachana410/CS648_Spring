/*eslint-env browser*/
var startingNumber = parseInt(window.prompt("Enter a starting number"), 10);
var i;

if (!isNaN(startingNumber)) {
    for (i = startingNumber; i >= 0; i -= 1) {
        window.console.log(i);
        document.write(i.toString()+"<br>");
    }
}else{
    window.alert("Invalid Number");
}