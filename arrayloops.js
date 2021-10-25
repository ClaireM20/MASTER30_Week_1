/*let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new",
];
coffeeOrder[1] = "ann -Vanilla Latte";
coffeeOrder.push("Donna - Espresso") //PUSH TO ADD TO END
coffeeOrder.pop(); //REMOVE LAST ITEM FROM ARRAY

console.log( coffeeOrder)
console.log( coffeeOrder.length)


// Array Methods -ADD TO END OF LIST = PUSH

//console.log( coffeeOrder);

// CHECK OUT METHODS FOR ARRAYS ie how to remove the 1st item

// ACTIVITY 1
//Make an array of your favourite songs x 3.
//Add another two songs using a method
// remove the last one. 

*/
//let myFaveSongs = [
   // "Wild Wood - Paul Weller",
  //  "Holiday  - Madonna",
  //  "Billie Jean - Michael Jackson",
//];
//myFaveSongs.splice(2, 0, "Staying Alive - Bee Gees", "Saturday Night Fever - Bee Gees")
//myFaveSongs.push("Moonlight Sonata - Beethoven")
//myFaveSongs.push("Your Light - The Big Moon")
 //PUSH TO ADD TO END

//myFaveSongs.pop(); //REMOVE LAST ITEM FROM ARRAY

//console.log(myFaveSongs)

//ACTIVITY 2  USE MAP(), SHIFT(), UNSHIFT(), SPLICE(), UNSPLICE()
//SPLICE EXAMPLE
 //fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
//fruits.splice(2, 0, "Lemon", "Kiwi");

/*let myFavedrinks = [

"mineral water",
"sparkling water",
"lemonade",
"coke",

];
for(let i = 0; i <myFavedrinks.length; i++) {
    console.log (myFavedrinks[i]);
}

console.log(myFavedrinks)
*/
/*

let multiplesTwoA = [];
for(let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        multiplesTwoA.push(i);
    }
    
}
console.log(`Numbers divisble by 2 between 0 and 20 are ${multiplesTwoA}.`); 

// ARRAYS AND LOOPS SELF STUDY ACTIVITIES (CHRIS)

//DAY 3 Activity 1
//Create an array that lists your favourite films up to 5 elements. Add two more using a method.
// Use a loop to cycle through the array. 

let myFavFilms = [
    "Top Gun",
    "James Bond",
    "Gone with the Wind",
    "Ice Age",
    "Frozen",
]
myFavFilms.push ("Great Film", "Another Great Film");

for (let i = 0; i < myFavFilms.length; i++){
    console.log(myFavFilms[i]);
}
// THIS CODE WORKS

/*DAY 3 ACTIVITY 2 - GENERATE 6 RANDOM NUMBERS BETWEEN 1 -50 
let arr = [];
while(arr. length < 7){
let r = Math. floor(Math. random() * 100) + 1;
if(arr. indexOf(r) === -1) arr. push(r);
console. log(arr)
*/

/* ACTIVITY 3 If we can create an array that puts 0-9 on the screen, how can count from 9-0 ?

for (let i = 10; i > 0; i-=1) {
  console.log(i); //THIS CODE WORKS
}

for (let i = 0; i < 10; i++) {
  console.log(i); // TO COUNT UP TO 10
}

// ACTIVITY 4 DISPLAY 4 FILMS IN AN ARRAY USE A FOR LOOP TO SHOW EACH FILM IN THE ARRAY: USE AN IF STATEMENT
Use an if statement to check if the 3rd film in the array is Ghostbusters.
If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!
*/

myFilms = [
    "Top Gun",
    "Gone with the Wind",
    "Great film ONE",
    "Great film TWO"
];
for(let i = 0; i <myFilms.length; i++) {
     console.log (myFilms[i])
}
    if (myFilms[2] == "Ghostbusters") {
        console.log("Yay it's Ghostbusters")
     } else {
         console.log("Boo we want Ghostbusters")
     }

// THIS CODE WORKS

//ACTIVITY 5 Create a variable, generate a random number between 1 and 30 six times, each random number generated, 
//check if this number of divisible by 7 or not.

let randomNumbers = []
for(let i =0; i < 6;i++){
  randomNumbers.push(Math.floor(Math.random()*30));
  console.log(randomNumbers)
  if(randomNumbers % 7 == 0){
    console.log(`${randomNumbers} is divisible by 7`)
  }else {
    console.log(`${randomNumbers} is not divisible by 7`)
  
}
}
// this code works

// ACTIVITY 6 > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place
// 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
//Using a nested loop iterate over both arrays and console.log out the matching follower.

let bobsFollowers = [
    "Claire",
    "Ruby",
    "Matthew",
    "Lucy"
]

let hannahsFollowers = [
    "Jane",
    "Paul",
    "Matthew",
    "Lucy"
]

for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < hannahsFollowers.length; j++){
        if(bobsFollowers[i] === hannahsFollowers[j]){ // when it iterates over the matching follower ==== it will log the name 
            console.log(hannahsFollowers[j])
        }
    }
}

// ACTIVITY 7 