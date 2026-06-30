let operator, operandL, operandR;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const display = document.querySelector("#display");
display.style.pointerEvents = "none";
display.tabIndex = -1;

function operate(operatorArg, operandLArg, operandRArg) {
  return operatorArg(operandLArg, operandRArg);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log(button.textContent);
  }),
);
