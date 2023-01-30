var num1;
var num2;

num1 = window.prompt("Enter the first number");
num1 = parseInt(num1);

num2 = window.prompt("Enter the second number");
num2 = parseInt(num2);

if(isNaN(num1)){
    document.write("First number you entered was not a valid number");
}else if(isNaN(num2)){
    document.write("Second number you entered was not a valid number");
}
else if(num1>num2){
    document.write("First number was : " + num1.toString() + "<br>");
    document.write("Second number was: " + num2.toString() + "<br>");
    document.write("Large number was: " + num1.toString() + "<br>");
}else if(num1<num2){
    document.write("First number was : " + num1.toString() + "<br>");
    document.write("Second number was: " + num2.toString() + "<br>");
    document.write("Large number was: " + num2.toString() + "<br>");
}else{
    document.write("First number was : " + num1.toString() + "<br>");
    document.write("Second number was: " + num2.toString() + "<br>");
    document.write("Both numbers are equal" + "<br>");
}