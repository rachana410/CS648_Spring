/*eslint-env browser*/
//Variable declaration
var coinFlip; 
var playersChoice; 
var isHeads;
var userChoice;

const THRESHOLD = 5;

//Random number generation
coinFlip  = Math.floor(Math.random() * 10);


if(coinFlip>THRESHOLD){
    isHeads = true;
}else{
    isHeads = false;
}

while(true){
    playersChoice = window.prompt("Enter Heads or Tails");
    if(playersChoice.toLowerCase()=="heads"){
        choice = true;
        break;
    }else if(playersChoice.toLowerCase()=="tails"){
        choice = false;
        break;
    }else{
        window.alert(" Invalid Input: Please try again");
    }
}

if (isHeads) {
    if (choice) {
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    if (choice) {
        window.alert("The flip was tails but you chose heads...you lose!");
    } else{
        window.alert("The flip was tails and you chose tails...you win!");
    }
}