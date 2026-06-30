let operatorFunc, operator, operandL, operandR, result;

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
display.value = 0;

function operate(operatorArg, operandLArg, operandRArg) {
  return operatorArg(operandLArg, operandRArg);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let operator = ["+", "-", "*", "/"];

    if (num.includes(+button.textContent)) {
      if (operandL == undefined) {
        operandL = +button.textContent;
      } else {
        operandR = +button.textContent;
      }
      console.log("number");
    }

    if (operator.includes(button.textContent)) {
      operator = button.textContent;

      if ((operator = "+")) {
        operatorFunc = add;
      } else if ((operator = "-")) {
        operatorFunc = subtract;
      } else if ((operator = "*")) {
        operatorFunc = multiply;
      } else {
        operatorFunc = divide;
      }

      console.log(operatorFunc);
    }

    if (button.textContent == "=") {
      result = operate(operatorFunc, operandL, operandR);
      console.log(result);
      console.log("execute");
    }

    if (button.textContent == "Clear") {
      console.log("clear");
    }
    console.log(button.textContent);
    display.value = button.textContent;
  }),
);
