const intialNumber = "";
const operator = "";
const number = "";

// This function add two numbers
const add = (a, b) => {
  return a + b;
};

//console.log(add(1, 6));

// This function subtract two numbers
const subtract = (a, b) => {
  return a - b;
};

//console.log(subtract(65, 43));

// This function multiply two numbers
const multiply = (a, b) => {
  return a * b;
};
//console.log(multiply(4, 6));

// This function divide two numbers
const divide = (a, b) => {
  return a / b;
};

//console.log(divide(34, 4));

// This function calculate two numbers depending on operator
const operatorFunction = (a, b) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operator");
  }
};
