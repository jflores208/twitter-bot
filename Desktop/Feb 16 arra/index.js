


/*function Car (color,make,model) {
    this.color= color;
    this.make= make;
    this.model= model;



    this.getColor = function () {
        return this.color
    }
}



let myCar = new Car ('red', 'Toyota', 'Corolla');
let myCarColor = myCar.getColor ();
console.log(myCarColor);

*/


 
 function getEvenNumbers (array) {
        var array = [12,77,84,52,90,14,8,4,31,95];

    for (let i= 0; i < array.length; i++) {
       console.log(array[i]); }  
       
        var a = 101;
        if (array % 2 === 0) {
        
        return array + 1;
        
        
   } 
         else {
           return "not an even number";
       }



    
}

getEvenNumbers([1,2,3,4,5,6,7,8]);
getEvenNumbers([1,3,5,6,2,8]);
console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));






function getEvenNumbers (arr) {
    let count = 0;
    for (let i =0; i < arr.length; i++) {
        console.log([i]);
        if ( arr[i] % 2 === 0) {
            count++;
        }

    
    }
return count;

}





