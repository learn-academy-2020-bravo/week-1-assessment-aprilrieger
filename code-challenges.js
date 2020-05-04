//April Rieger's // ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//declare the function and pass through the argument of temp
const theTemp = (temp) => {
  //add an if statement that determines if the temp is above (greater than) 212 degrees (boiling point)
  if(temp > 212){
    //return the string interpolation and message
    return `${temp} is above the boiling point.`
    //Add an else if statement that determines if the temp is below (less than) 212 degrees (boiling point)
  } else if (temp < 212){
    //return the string interpolation and message
    return `${temp} is below the boiling point.`
    //Add an else if statement that determines if the temp is at (strict equal to) 212 degrees (boiling point)
  } else if (temp === 212){
    //return the string interpolation and message
    return `${temp} is at the boiling point.`
  }
}
call the function
console.log(theTemp(temp1))
console.log(theTemp(temp2))
console.log(theTemp(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//Declare a function that takes in an array
const mult5 = (array) => {
  //create a new array
  let newArr = []
  //tell the loop to stop after the legth of the array
  for(let i=0; i<array.length; i++){
  //push the test array through one increment at a time and multiply by 5
    newArr.push(array[i] * 5)
  }
  // and returns a new array with all numbers multiplied by 5.
  return newArr
}
//call the function
console.log(mult5(myNumbers1))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//Declare a function that takes an array as an arguments
const mult5 = (array) => {
  //that returns the data fromt he array multiplied by 5
  return array.map(value => value * 5)
}
//call the function
console.log(mult5(myNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//Declare a function that passes through a string
const noVowels = (string) => {
  //returns the string split, filtered out the vowels that are upper/lower case and joins them back together.
  return string.split("").filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u" && value != "A" && value != "E" && value != "I" && value != "O" && value != "U").join("")
}
//call the function
console.log(noVowels(stringWithVowels1));
console.log(noVowels(stringWithVowels2));

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42
var thisStringRightHere = "Hello"

//Declare a function that passes through input
const noVowels = (input) => {
  if(typeof input === "string"){
  //returns the input split, filtered out the vowels (upper/lower case) and joins them back together.
  return input.split("").filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u" && value != "A" && value != "E" && value != "I" && value != "O" && value != "U").join("")
  } else {
    //if the variable was not a string it will then return this error message
    return "Error: This variable was not a string"
  }
}
//call the function
console.log(noVowels(notAString1));
console.log(noVowels(notAString2));
console.log(noVowels(thisStringRightHere));

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

var animal = toonimals.filter(value => value.animal === "cat")
console.log(animal)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

//Create a seperate variable and filter it through the value of the objkect within the array and exclude those with the string of cat
var whatAnimal = toonimals.filter(value => value.animal !== "cat")

//create a seperate varibale that will take the value of the name of the object
var result = whatAnimal.map((a) => (a.name));

//call my function
console.log(result)

// Expected output: "Itchy" "Daffy" "Ren"
