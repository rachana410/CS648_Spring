
for(var i = 1;i<=100;i++){
    var result = "";
    if(i%3==0 && i%5==0){
        document.write("Marco! Polo!"+ "<br>");
        window.console.log("Marco! Polo!");
    }else if(i%3==0){
        document.write("Marco!"+ "<br>");
        window.console.log("Marco!");
    }else if(i%5==0){
        document.write("Polo!"+ "<br>");
        window.console.log("Polo!");
    }else{
        document.write(i.toString()+ "<br>");
        window.console.log(i.toString());
    }
}