// console.log("Hello World");
// console.log("hello". toUpperCase());

// console.log(Math.random()*10);
// console.log(Math.floor(0.9924531604846454));

// console.log(Math.floor(Math.random()*10));


// console.log("      |       |");
// console.log("      |       |");
// console.log("      |       |");
// console.log("- - - - - - - - - - -");
// console.log("      |       |");
// console.log("      |       |");
// console.log("      |       |");
// console.log("- - - - - - - - - - -");
// console.log("      |       |");
// console.log("      |       |");
// console.log("      |       |");

//let lineA = ("      |       |");


// let lineB = ("- - - - - - - - - - -");


/*console.log(lineA);
console.log(lineA);
console.log(lineA);
console.log(lineB);
console.log(lineA);
console.log(lineA);
console.log(lineA);
console.log(lineB);
console.log(lineA);
console.log(lineA);
console.log(lineA);
*/

/*const lineA1 = ("      |       |");
const lineB1 = ("      |       |");
const lineC1 = ("      |       |");

 const lineD = ("- - - - - - - - - - -");
 const lineD1= ("- - - - - - - - - - -");

let block1 = [
    lineA1,
    lineB1,
    lineC1,

];
console.log(block1);
*/

/*let testString = 'All Around the World';
let eigthCharacter = testString[7];
console.log(eigthCharacter.toUpperCase());


(let index = 0; index < 9 ;index++) {
    console.log("     |      |     ");
    while (index === 2 | index === 5){
        console.log("-----------------");
        break
    } }

   /* Write a program that checks if the given sentence ends with the letter d. Hello World. The console should return true. If not, it will return false. 
- Write a program that removes the whitespace from the start and end of the given sentence.    Hello World     . 


*/


 /*function confirmEnding(string, target) {

    if (string.substr(-target.length) === target) {
    return true; 

    } else { 

   return false;
 }
}

  confirmEnding('Hello World', 'd');

console.log(confirmEnding);
*/

function confirmEnding(string, target) {

    return string.endsWith(target);
}

 console.log(confirmEnding("Hello World", "d"));



 const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";
