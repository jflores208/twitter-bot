/*function myFunction (func) {
  if  (func >= 0){
      return true
  }

  else {
      return false
  }

}



let array = [4,5,6,7,8];
for(let i=0;i<array.length; i++) {
    console.log(array[i]);

}


let person = new Object () ;
person.firstName = "jasmine";
person.lastName = "flores";
person.hairColor = "brown";
person.eyeColor = "brown";

function Person (firstName, lastName, hairColor, eyeColor) {
    this.firstNAme = firstName;
    this.lastName = lastName;
    this.hairColor= eyeColor;

}

let jasmine = new Person ('Jasmine', 'Flores','brown','brown');


let elements = document.querySelectorAll("span.goldText");




function myFunction (rock) {
    var r = "rock";
    if (r >= 1) {
    result= 'win'

}
    else {
    result = 'lose';
}
}
*/

/*

var userChoice = p ();
var randomChoice= Math.random();
if (computerChoice < 1) {
    randomChoice= "rock";
} else if (randomChoice <=2) {
    randomChoice= "paper";
}else {
    randomChoice= "scissors";

}

var compare=function(pick1, pick2) {
    if (pick1===pick2){
        return "tie";

    }
    else if (pick1===pick2){
        if(pick2==="scissors"){
            return "rock"
        }
        else if (pick2==="paper"){
            return"paper";
        }
    }
    else if (pick1==="scissors"){
        if(pick2==="paper"){
            return "scissors"
        }
        else if (pick2==="rock"){
            return "rock";

        }
    }

}
console.log (compare(userChoice,randomChoice));




function rps () {
    let random=Math.random ()
    if (1===1) {return Math.random}
}
*/

/*function playAgainstRock (choice) {
    if (choice==='rock') {
        return "tie";
    }
    else if (choice=== 'paper') {
        return "win";
    }
    else {
        return "lose";
    }
}
console.log("tie");
*/

function myPlayers (player1, player2) {



    if (player1==='rock')  {
        if (player2==='scissors'){
            return 'You win!';
        }
       
    }
    if  (player1==='scissors'){
        if (player2==='rock'){
            return 'I win!';
        }
    }
     if (player1==='rock'){
        if(player2==='paper'){
            return 'I win!';
        }
    }

    if (player1==='paper'){
        if (player2==='rock'){
            return 'You win!';
        }
    }

    if (player1==='scissors'){
        if (player2==='paper') {
            return 'You win!';
        }
    }

    if (player1==='paper') {
        if (player2==='scissors'){
            return 'I win!';
        }
    }
    

    
      if (player1===player2) {
        return "It's a tie!"; }

        }
    

        //function logValue (event) {
             //   console.log(event.target.value);
       // }

        function playGame (event) {
            let userChoice = event.target.value;

            let options= ["rock","paper","scissors"];

            let randomIndex= Math.floor(Math.random() * options.length);

            let computerChoice= options[randomIndex];


            let winner= myPlayers(userChoice, computerChoice);
            //console.log(event.target.value);
            let userChoiceText= `You chose ${userChoice}\n`;
            let computerChoiceText = `I chose ${computerChoice}\n`;

            let finalText = userChoiceText + computerChoiceText + winner;

            let  winnerLocation= document.querySelector(".text");
            winnerLocation.innerText = finalText;
        }

        

        let buttons = document.getElementsByClassName("button");

        for (let i=0; i<buttons.length; i++) {
            console.log(buttons[i]);
            let button= buttons[i];

            button.onclick = playGame;

            }
        



