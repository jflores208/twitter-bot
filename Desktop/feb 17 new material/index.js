
/*
button.innerText = "Hello!";



button.innerText ="Bye!";






button.style.fontSize= '24px'; 


var container = document. querySelector(".container");



let paragraph = document.createElement ("p");

paragraph.innerText= "This is a paragraph";

container.appendChild (paragraph);
container.removeChild (paragraph);

button.style.backgroundColor= "teal";


//. 1
let child1 = document.getElementById("nested");


// .2
let child2= document.querySelector("#nested");

//. 3

let child3 = document.querySelector(".parent > .child");


*/
/*let buttons = document.querySelectorAll("button");
console.log(buttons);

for (i= 0; i <buttons.length;i++) {
    buttons[i].style.color= "teal";
    buttons[i].innerText="HI";
}
*/


// 0. Write a line of code to select the body tag in the HTML and store it inside a variable named body.
  
var body = document.querySelector ("body");




//1. Create a new div and append it to the body.


let myDiv = document.createElement("div");
body.appendChild(myDiv);



//2. Give the div from (1.) a class: myDiv. In CSS, give this class a background color of #ffb3ff.

 myDiv.className= "myDiv";

 //3. Create a h1 tag and append it to the div from (1.). Give this tag an ID: myHeader.


var h  = document.createElement ("h1");
h.id= "myHeader";
myDiv.appendChild(h);





let h2 = document.getElementById ("subHeader");
h2.id= "mySubHeader";
myDiv.appendChild(h2);

h.innerText = "This is a header";
h2.innerText = "subHeader";


myDiv.removeChild (h);


body.appendChild(h);


for (let i =0; i <5; i++) {
    let paragraphs =document.createElement("p");
    paragraphs.innerText = `This is p tag 1${i}`;
    body.appendChild(paragraphs);
}





