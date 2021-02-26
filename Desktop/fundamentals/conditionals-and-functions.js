/*
Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;
console.log(equals);
// Greater than
let greaterThan= 5>1;

//Less than
let lesThan= 2 <10;

//Greater than
let greaterThanEq=5 >=5;

//Less Than Equals
let lessThanEq= 4 <=9;

//Not Equals
let notEquals= 5 !==2;

let storeA= 4.40;
let storeB= 4.40;




function compareStorePrices (storeA, storeB) {

}
    let storeAIsLower =storeA < storeB;
    if (storeAIsLower) {
    console.log("Store A has a lower price.")
}else if (storeB < storeA) {
    console.log("Store B has a lower price.")
}else {
    console.log("Their prices are equal. ")
}

    compareStorePrices(10,5);
    compareStorePrices(7,10);

    function squareNum (number) {
       let squared = number * number;
       return squared;
    }

    let squareNumber = squareNum(4);
    console.log(squareNumber);

let x=10;

function addNumbers (n, m, x) {
    console.log(x);
    if (1===1)  {
        let b = 8;
        console.log(b);
    }

    return n +m ;

}
addNumbers(1,2,10)

//              0 1 2 3 4 5 6
let ourArray = [1,2,3,4,5,6,7];

let arrlen= ourArray.length;
for(let i=0; i<arrLen; i++){
   // console.log("i is equal to: "+i)
    console.log(ourArray[i])
    for(let j=0; j<10; j++) {
        console.log('j is equal to: ' + j);
    }

    }


let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}


