// DAY 4 ACTIVITY 1

const person = {
    name: "Claire",
    age: 47,
    favouriteSongs:
    [
        "song ONE",
        "song TWO",
        "song THREE",
        "song FOUR",

    ],
    sayHi() {
    return console.log (`Hello my name is ${this.name}`)
    }
    
}
person.sayHi() //A ( function) is called a METHOD IN AN OBJECT

// ACTIVITY 2 - functions within objects are referred to as METHODS
const pet = {
    name: "Rover",
    typeOfPet: "dog",
    age: 4,
    colour: "brown",
  

  eat(){
    return console.log(`Your pet ${this.name} is eating his dinner.`)
  },
  drink() {
    return console.log (`Your pet ${this.name} is drinking his water`)
}
  }
  pet.eat()
  pet.drink()




// ACTIVITY 3 COFFEE SHOP 

const coffeeshop = {
    branch : "Manchester",
    drinksPrices : [
     ["Latte", "Mocha", "Flat white"],
     [3.10, 3.20, 3.65 ]
    ],

    foodPrices : [
     ["Chips", "Salad", "Sandwich"],
     [2.50, 4.80, 3.25 ]

    ],

    foodOrdered(){
     return console.log (`You ordered:${this.foodPrices[0][0]} and ${this.drinksPrices[0][0]}. THe cost for this order
     will be ${this.foodPrices[1][0] + this.drinksPrices[1][0]}`) 
    }
}
coffeeshop.foodOrdered()

