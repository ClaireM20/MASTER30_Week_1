/*let i = 10 
console.log(i);

const name = "Claire"; //original declaration so can be changed only here not further down the line.
console.log (name);
*/

/*let favouriteDrink = "coffee";
console.log(favouriteDrink);

console.log("my favourite drink is " + favouriteDrink + ".");

*/
/*
let myFavouriteColour = "blue";
let name = "Claire";
let age = "47";

console.log(`My name is ${name}. I am ${age} years old. My favourite colour is ${myFavouriteColour}.`)


myFavouriteColour = "green"
name = "Claire Louise"
age = "21"

console.log(`My name is ${name}. I am ${age} years old. My favourite colour is ${myFavouriteColour}.`)

//create a programm that stores what you have eaten today for breakfast lunch and dinner;

/*
let breakfast = "porridge";
let lunch = "sandwich";
let dinner = "curry";

console.log (`Today I have eaten ${breakfast} for breakfast, for lunch I have eaten ${lunch}, for dinner I have eaten
    ${dinner}.`)

    breakfast = "cereal"
    lunch = "salad"
    dinner = "chips"

    console.log (`Tomorrow I will eat ${breakfast} for breakfast, for lunch I will eat ${lunch}, for dinner I will eat ${dinner}.`)


    /* noughts and crosses grid
let spaceOne = `x`;
let spaceTwo = `o`;
let spaceThree = `x`;
let spaceFour = `o`;
let spaceFive = `x`;
let spaceSix = `o`;
let spaceSeven = `x`;
let spaceEight = `o`;
let spaceNine = `x`;


console.log(`      |       |`);
console.log(`  ${spaceOne}   |   ${spaceTwo}   |`);
console.log("      |       |");
console.log(`- - - - - - - - - - -`);
console.log(`      |       |`);
console.log(`  ${spaceThree}   |   ${spaceFive}   |`);
console.log("      |       |");
console.log(`      |       |`);
console.log(`- - - - - - - - - - -`);
console.log(`      |       |`);
console.log(`  ${spaceSeven}   |       |`);
console.log("      |       |");
console.log(`      |       |`);

/* calculate the number of days from now until your next birthday

let myBirthday = new Date (2022, 8, 24); 
let todaysDate =  new Date (2021, 10, 19);

// set current year, or next year if you've already had a birthday
myBirthday.setFullYear(todaysDate.getFullYear());
if (todaysDate < myBirthday)

{

    myBirthday.setFullYear(todaysDate.getFullYear() + 1);

}

// calculate the difference between days

let result = Math.floor((myBirthday - todaysDate) / (1000*60*60*24));

console.log(result)


//****************************************** 
*/
// or 
// Activity 3
/* To set two dates to two variables. We have to use the Date Object.
const birthDay = new Date("2022,3,22")
const todaysDate = new Date("2021, 10, 19");
// This calculates the difference but IN milliseconds.
let diffInTime = birthDay.getTime() - todaysDate.getTime()
// To convert that to days we use this calculation.
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// Finally, it is console logged out here using string template literals. 
console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`)

// *************************************************


let weather = "sunny";
if (weather === "sunny") {
    console.log("yay grab a hat")
} else if (weather === "rainy") {
    console.log("get an umbrella")

}else if (weather === "windy") {
    console.log("dont get blown away")

}
else {
    console.log("Im sorry I dont understand")
}

let place = "Manc"
let weather = " Cloudy"

if (place === "Manc" && weather === "Sunny") {
    console.log(" Are you sure, check again!")
}
 else {
     console.log(" nothing's changed then")
 }

//*************************************************** 


 /* DAY 2 ACTIVITY 1 

 Create a variable called age. Write and IF statement that logs 'yes I can serve you" if the age is 
 if the age is greater than 17 and ELSE logs "you arent old enough"

let age = 20
if(age > 17) {
    console.log("Yes I can serve you")
}
else{
    console.log("you aren't old enough")
}

// Activity 1 Stretch 
let ageNew = 15
let country = "UK"
if(ageNew > 17 && country === "UK") {
    console.log("Yes I can serve you because you are old enough for the UK licensing laws")
}
else {
    console.log("Sorry, you aren't old enough to drink in the UK.")
}
*/

//****************************************************



 /* DAY 2 ACTIVITY 2 
let topping = "cheese";

//switch(topping){
case "olives":
case "tomatoes":
case "cheese":
//console.log("I like this ingredient for my pizza");
 break;
case "ham":
case "tuna":
case "anchovies":
//console.log("I don't like these on my pizza");
 break;
case "pineapple":
//console.log("I don't mind this on my pizza");
 break;
default:
  //  console.log("what sort of topping is that?!");
//}

// ***************************************************


DAY 2 ACTIVITY 3
Create a variable called password. Check how many letters are in the password
If less than 8 log to the console that there are too few letters. Otherwise log to the console.

*/

/*let newPassword = "cake"

if (newPassword.length < 8) {
    console.log("your password is too short")
}
else {
   console.log (newPassword)
}


//DAY 2 ACTIVITY 3 STRETCH.
// create a variable called num Check if the variable is divisible by 3 or 5. If it is log this number is divisible by 3 or 5.
*/
//let num = 17
 //if (num % 3 ==  0 || num % 5 == 0) {
   //  console.log("This number is divisible by 3 or 5")
 //}

 //else {
    // console.log("Something else!")
 //}
// ****************************************************************************


 //DAY 2 ACTIVITY 4 
 //Create a variable called num. If num is divisble by 3 log 'fizz'. If num divisible by 5 log 'buzz' if divisible by both 
// log "fizz buzz'. Otherwise log the number to the console.


/*let num1 = 9

 if ( num1 % 3 == 0 && num1 % 5 == 0){
    console.log("fizzbuzz")

 } else if (num1 % 3 ==  0 ) {
     console.log("This number is divisible by 3")

 } else if (num1 % 5 ==  0) {
     console.log("This number is divisible by 5")
  
 } else {
     console.log(num1)
 
 }
 ***************************************************************
*/

/* DAY 2 ACTIVITY 5 

Create a variable called num. Check if the number is a palindrome. // this is not working. 

let palindrome = 7007;
let palinString = palindrome.toString();
console.log(palinString);
let palinSplit = palinString.split('');
console.log(palinSplit);
let palinReverse = palinSplit.reverse();
console.log(palinReverse)
let palinJoin = palinReverse.join('');
console.log(palinJoin);

if (palindrome == palinJoin) {
    console.log("This is a palindrome.")
} else {
   console.log("Not a palindrome")
 }

 **********************************************************

 Activity 6
 Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an IF statement
that logs to console where someone is at times of the day. Eg if time is 7 I'm at home, at 8 I, commuting etc.

let time = 11
let myPlaceOfWork = "the office"
let myTownOfHome = "Manchester"

if (time >= 9 && time <= 17) {
    console.log(`I am at ${myPlaceOfWork} right now.`)
}

else if  (time <= 9 ) {
    console.log(`I am not at ${myPlaceOfWork} right now, I'm on my way in.`)
}

else if (time > 17 && time <= 19) {

 console.log(`I am not at ${myPlaceOfWork} right now, I'm on my way home.`)}

else 
    console.log(`I am at home in ${myTownOfHome} right now.`)}

}

Activity 7
Take the string "asdjkdksjdkjakslakjfalsjfhgkhslaksflajsflkasfljalsjflaksfkskjksjdjsdi"Find the index of the last vowel in the string

// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }



/*Actvity 8 
Create a variable called word that takes a string. Create an if statement that checks is the last letter is the same as the first
If it is return true if not return false. 
*/
let word = "good is a string"
let wordchar1 = word[0]
let wordcharfinal = word[word.length -1]
 
if (wordchar1 == wordcharfinal){
    console.log("true")
} else {
    console.log("false")
}


/*
Activity 9
Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is return the 
number, otherwise return the numbers multiplied together. 


*/

let num1 = 8
let num2 = 7
let sumof = num1 + num2 

if ((sumof) % 2 == 0) {
    console.log(sumof)
} else {
    console.log(num1 * num2)
}

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