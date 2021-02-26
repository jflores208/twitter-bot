/*function RightTriangle (base, height) {
    this.height = height ;
    this.base = base ;

    this.longestSide= function ()  {
    
    if (this.base>this.height) {
    console.log("Base is longer")
    }

    if (this.base<this.height) {
    console.log("Height is longer")

    }

    if (this.base === this.height) {
        console.log("This right triangle can't exist.")
    }

}
    

    this.getArea=  function () {
        return this.base*this.height*.5
        
    }
    

}



let smallTriangle = new RightTriangle (3,6);
let bigTriangle = new RightTriangle (10,20);


let smallTriangleArea = smallTriangle.getArea();
let bigTriangleArea = bigTriangle.getArea();
let smallTriangleHeight = smallTriangle.height;

if (smallTriangleArea===100) {
    console.log("big triangle test passed!")

}

  /*let peak = 20
  let bottom = 4

   


  console.log(peak);
  console.log(bottom);

*/




/*function RightTriangle (height,base) {
    this.height= title;
    this.base= numPages;


    this.publisher = "Some other publisher";
    this.getPublisher = function () {
        console.log(`The publisher is ${this.publisher}`);

    this.getArea = function () {
        
            console.log(`This book has ${numPages}`)
        }
       

    }



}

let novel= new Book ("The Hunger Games", 150);
let sequel = new Book ("The HUnger Games: Catching Fire", 175);
console.clear();
console.log(novel);
console.log(sequel); */


/* Write a constructor function for an object
called User that takes in the following inputs
and stores them as properties:
- username, a string
- password, a string */
function User(username, password) {
    this.username = username;
    this.password = password;
}

let Melicia = new User("Jazzy123_", "image432");
console.log(Melicia);

let jazzy = new User("jazzy", "vineger432");
console.log(jazzy);




  
/*function User (username, password) {
    this.username = username ;
    this.password = password; 
    this.oldPassword= [];

    this.changePassword = function (Newpassword) {
        this.oldPassword.push(this.password);

        this.password= newPassword;
        
    }
}    


 this.changePassword;

 //for (i=0; i === thid.oldPassword; i++) {
   //  console.log("wrong password")
// }


let oldPassword = this.oldPassword;

for (let i=0; i < oldPassword; i++) {
    let val = array[i];
    console.log(array[i]);
}




3






//3. Modify your changePassword to perform some safety checks.
// When the changePassword method is called, loop through
// each element in the oldPasswords array. If the newPassword
// is equal to any of the old passwords, log a message to the user
// indicating they can't use that password.

// Otherwise, change the password as normal.


/*var newGames = {
    name: ["Final Fantasy", "Call of Duty","The last of us" ]
   
}


this.newGames = ["Final Fantasy", "Call of Duty", "the last of us"];
console.log(this.newGames);
newGames.push("mario Kart");
newGames.sort();


  /*function   ;
  {  for (let i=0; i < newGames.length; i++) {
        console.log(newGames);
    }

}


//for ( i=0;  i < name.length; i++) {
      //  console.log(name[i]);
 //   } */

 var newGames = {
   name: ["Final Fantasy", "Call of Duty","The last of us" ],
    displayName :function () {
        console.log(this.name)
    },
    addName : function (x) {
        this.name.push(x);

    },
    sortName : function () {
        this.name.sort();
        console.log(newGames);
    },
    loopNames : function () {
        for (i=0; i < this.name.length; i++)
        console.log(this.name[i]);
    }


 }

 newGames.displayName();
 newGames.addName("mario kart");
 newGames.displayName();
 newGames.sortName();
 newGames.loopNames ();


 var media = {
     games : newGames.name 

 }

 console.log (media.games);
 media.games.push("among us");
 console.log (media.games);


 
 