
 // IF ELSE WARM UP
let customer = 10;
let child = "£8";
let adult = "£10.95";
let senior = "£7.50";

if ( customer < 18 ) {
    console.log (`Please pay ${child}`)
} else if ( customer > 18 && customer < 60) 
    {console.log (`Please pay ${adult}`)
    
} else ( customer >= 60 ) 
        console.log (`Please pay ${senior}`)
let cooking = "violet"
const favColour = (bread, cakes, cheese) => {
    console.log(`My fave colors are ${bread} and ${cakes} and ${cooking}.`);
}
favColour ("green", "yellow", cooking);



//Activity 1 JOHN 

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
factorial(33);

// ACTIVITY 2 JOHN Edit the snippet to include 2 parameters and a running order count updated when the function is called.

let orderCount = 0;

const takeOrder = (topping, topping2) => {
    console.log (`Order ${orderCount}: pizza with topping ${topping} and ${topping2}`)
    ordercount++
}
 takeOrder("onions" , "cheeze")

//***************************************************************
//activty 3 JOHN 
let pinNumber = 1001
let balance = 40

const cashWithdrawal = (pin, amount) => {

if (pin === pinNumber) {
   console.log(" Your pin is correct")

} else if (amount < balance) {
    console.log(" How much would you like to withdraw")
} else if ( amount > balance) {
    console.log("Sorry you cannot withdraw this time")
}

}
cashWithdrawal(1001, 50);

