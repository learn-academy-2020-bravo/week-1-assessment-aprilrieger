// April Rieger's // ASSESSMENT 1: Testing practical questions
//
// $ yarn add jest
//
// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe a function that takes an argument that adds two numbers
describe("addThemUp", () => {
  //test that the outcome is as expected
  test('adds 2+2 to equal 4', () => {
    //expect the outcome
    expect(addThemUp.add(2, 2)).toBe(4);
  })
})
// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = {
  add: (num1, num2) => num1 + num2
}
console.log(2, 2)

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triangle and returns the area. The area of a triange is the base times the height divided by two.

describe ("triangleArea", () => {
  test(`Takes the base and height of a triangle and outputs the area of the triangle`, () => {
    expect(triangleArea(10,5)).toEqual(25)
  })
})
// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (num1, num2) =>{
  return ((num1 * num2)/2)
}
