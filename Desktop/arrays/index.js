// var fruits = ["apple", "banana", "cherry"];

 //var myFave = fruits[0]; //returns apple 
 //console.log(myFave);
 //var yellowOne = fruits [1]; //returns banana 

 //console.log(yellowOne);
 

 //var myCherry = fruits[1];
 //console.log(myCherry);

 //console.log(fruits);
 //fruits[1]= "brocoli";
 //console.log(fruits);

 //fruits.push("grapefruit");
 //console.log(fruits);

 //uits.pop();
 //console.log(fruits);


 //fruits.slice(1);
 //console.log(fruits);


 //let myMap = new Map ();
 //myMap.set("Car","Nissan");
 //myMap.set("")

 //var numCar = myMap.get("Car");


//console.log(numCar);

//let first = new Map ([
  //  [1, "one"],
   // [2,"two"],
   // [3, "three"],
   // ["four",4]
//]);


//var numFirst = first.get("four");
//console.log(numFirst);

 //var mapValues= myMap.values();
 //console.log(mapValues);


 //var mapKeys = myMap.keys();
 //console.log(mapKeys);

 //var i;
 //var arr= [1,2,3,4,5,6,7,8,9];

 //for (i=7; i <arr.length; i++) {
   //  console.log(arr[i])
 //}





//var i = 9 ;
//var text;  
//while (i < 50) {
   // text += "<br>The number is " +i;
    //i++;
//}

//document.write(text);


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
