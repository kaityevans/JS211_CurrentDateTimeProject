// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertStringToNumber = (str) => {
  console.log(typeof str)
  const result = Number(str)
  console.log(typeof result)
  return result
}

console.log(convertStringToNumber("5"))

// Write a JavaScript program to convert a string to the number.
const convertNumberToString = (num) => {
  console.log(typeof(num))
  const answer = String(num)
  console.log(typeof(answer))
  return answer
}

console.log(convertNumberToString(5))
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
function checkDataType(element) {
  return typeof element
}

console.log(checkDataType(5))
console.log(checkDataType('hello'))
console.log(checkDataType(true))
  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
}

let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')
let sumOutput = document.getElementById('sumOutput')
let sum = document.getElementById('sum')

sum.addEventListener('click', () => {
  console.log('click')
  sumOutput.innerText = Number(firstNumber.value) + Number(secondNumber.value)
})

console.log(addTwoNumbers(1,2))
console.log(addTwoNumbers(50,90))

// Write a JavaScript program that runs only when 2 things are true.

const twoTrueThings = (x, y) => {
  if(x >= y && y >= x) {
    return true
  }
  else {
    return "Doesn't Work"
  }
}

let xVar = document.getElementById('xVar')
let yVar = document.getElementById('yVar')
let truthOutput = document.getElementById('truthOutput')
let isItTrue = document.getElementById('isItTrue')

isItTrue.addEventListener('click', () => {
  console.log('click')
  truthOutput.innerText = twoTrueThings(xVar.value, yVar.value)
})

console.log(twoTrueThings(1,1))
console.log(twoTrueThings(0,1))
console.log(twoTrueThings(8,8))
console.log(twoTrueThings(20,6))

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrueThing = (x, y) => {
  if(x > y || y-x > 0){
    return true
  }
  else {
    return "Nah"
  }
}

let xNum = document.getElementById('xNum')
let yNum = document.getElementById('yNum')
let oneOutput = document.getElementById('oneOutput')
let justOne = document.getElementById('justOne')

justOne.addEventListener('click', () => {
  console.log('click')
  oneOutput.innerText = oneTrueThing(xNum.value) + oneTrueThing(yNum.value)
})

console.log(oneTrueThing(1,2))
console.log(oneTrueThing(2,2))

// Write a JavaScript program that runs when both things are not true.  

const notTrueThings = (x, y) => {
  if(!(y > 0 && x > 0)){
    return true
  }
  else {
    return "Nope"
  }
}

console.log(notTrueThings(1, 1))
console.log(notTrueThings(-1, -3))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
