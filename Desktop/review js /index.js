/*
functions 
arrys 
maps 
objects 
*/



//0. Write a function that in two numbers. Call these numbers "divisor", "dividend".
//Return the value of the "divisor" input divided by the "dividend" input.

    /* divisor= 12;                       
     dividend= 4;

     newNum= divisor/dividend;

     console.log(newNum);*/



     /*function divide (divisor, dividend) {
        var ans = divisor/dividend;
        return ans
        

     }

     console.log (divide(20,5)   )
     console.log (divide(12, 3)  )
     console.log (divide(50, 4)  )
     console.log (divide(47,7)   )

*/


/*1. Write a function called numDoubler that takes in a single number.
Return the value of that number multiplied by 2.

numDoubler(3) -> 6
numDoubler(-3) -> -6
numDoubler(0) -> 0

*/


/*function numDoubler (a) {

    return a * 2;
}

console.log (numDoubler(3));
console.log (numDoubler(98));


//Write a function that takes in an array. Use a loop to iterate through each element in that array and log it to the console.

    
    function arrayPrinter (arr) {
            //indexing variable that tracks where we are in the looping process
            // first, set the initial value of that variable
            //then we set the limit where the loop will break, or stop running
            //based on the value of the indexing variable 

            //finally we change 

        for (let i=0; i < arr.length; i++){

            console.log(arr[i]);

        }
        console.log("finished")

    }

    arrayPrinter (["ice cream", "cookies", "chocolate"]);
    arrayPrinter ([1,2,3,4]);
    arrayPrinter ([true, 2, undefined, "hello"]);


   
*/

// write a function that takes in a positive number
// use a loop to iterate and log each number from 0 to N out to the console 

/*function newNum (num) {

    for ( let i=0; i <=num; i++){

        console.log(i);

  }
    
}

newNum ("30");
newNum ("2");




function countoN (n) {
    for (let i = 0; i<=n; i++) {
        console.log(i);
    }
}

countoN (10);
countoN (6);


//Write a function that takes in two inputs, a string and a positive number N.
//The function then prints the string provided to the console N times. */

//function newNum (num) {

   // for (let str="hello class"; str<=num; i++) {
     //   console.log(str);
    //}

    //for (let i =0; i<=num; i++) {
      //  console.log(i);
   // }

//}

//newNum (3);
//newNum (5);

//str= "Hello Class"; 
//str.repeat (10);
//console.log (str.repeat(10));


/*function printStringNTimes (str, N) {
    for (let i =0; i <N; i++) {
        console.log(str);
    }
}

printStringNTimes ("I'm seeing double", 5) 
printStringNTimes ("hello",6)


string input =""*/
 /*class JavaDoWhileLoop{
int i =0;
while (i <5) {
    system.out.printIn ("Hello World ");
    i++;
}

}

var text ="Hello World";
var i = 0;
do {
    text+= "
The number is " 4+ i;
    i++;
}
while (i < 0)
document.write(text);

*/

/*let myCat = new Object ();
myCat.name ="Fluffy";

myCat.age ="4";
myCat.kittens= ["snowball", "kittens"];
myCat.meow= function () {
    console.log ("meow");

}


myCat.birthday = function () {
    

    myCat.age = myCat.age +1;

}
myCat.kittenCheck= function () {
    for (let i=0; i < myCat.kittens.length; i++) {
        console.log(myCat.kittens[i])
    }

}

myCat.kittenCheck()



console.log(myCat);



myCat.birthday();

console.log(myCat);


// write a method called kittenCheck
// that loops through the array of kittens
// and prints out each one to the console*/

////let lightSwitch = new Object();
// by default, the light switch is turned off 

//lightSwitch.isOn = False;
//lightSwitch.change= function () {
    // turn on 

    //if (lightSwitch.isOn === False) {
      //  lightSwitch.isOn = True;

   // }

   // else {
     //   lightSwitch.isOn= False;

//}


//let lightSwitch2 = {
  //  isOn: false,
    //change: function () {
      //  if (lightSwitch.isOn === False) {
        //lightSwitch.isOn = True;
    //}

      //  else {
        //lightSwitch.isOn= False;
    //}
 //}
//}

//console.log(lightSwitch);
//console.log(lightSwitch2);



//}
/*
function Book (title,numPages) {
    this.title= title;
    this.numPages= numPages;


    this.publisher = "Some other publisher";
    this.getPublisher = function () {
        console.log(`The publisher is ${this.publisher}`);

    this.getPages = function () {
        
            console.log(`This book has ${numPages}`)
        }
       

    }



}

let novel= new Book ("The Hunger Games", 150);
let sequel = new Book ("The HUnger Games: Catching Fire", 175);
console.clear();
console.log(novel);
console.log(sequel);


