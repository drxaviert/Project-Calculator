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
  if (a != 0) {
    return a / b;
  } else {
    return "LOL";
  }
}

function getResult() {
  result = operate(operatorFunc, operandL, operandR);
  display.value = result;
}

function reset() {
  operator = operandL = operandR = result = null;
  display.value = 0;
}

function decimalChecker() {
  //
}

const display = document.querySelector("#display");

display.style.pointerEvents = "none";
display.tabIndex = -1;
display.value = 0;

function operate(operatorArg, operandLArg, operandRArg) {
  return operatorArg(+operandLArg, +operandRArg);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let numChecker = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    let operatorChecker = ["+", "-", "*", "/"];

    if (numChecker.includes(button.textContent)) {
      if (result != null) {
        reset();
      }
      if (operator == null) {
        if (operandL == null) {
          if (button.textContent != ".") {
            operandL = button.textContent;
            display.value = operandL;
          }
        } else {
          if (button.textContent != ".") {
            operandL += button.textContent;
            display.value = operandL;
          } else {
            if (!operandL.includes(".")) {
              operandL += button.textContent;
              display.value = operandL;
            }
          }
        }
      } else {
        if (operandR == null) {
          if (button.textContent != ".") {
            if (button.textContent != ".") {
              operandR = button.textContent;
              display.value = operandR;
            }
          }
        } else {
          if (button.textContent != ".") {
            operandR += button.textContent;
            display.value = operandR;
          } else {
            if (!operandR.includes(".")) {
              operandR += button.textContent;
              display.value = operandR;
            }
          }
        }
      }

      // console.log("number");
    }

    if (operatorChecker.includes(button.textContent)) {
      if (operator != null && operandL != null && operandR != null) {
        getResult();

        operandL = result;
        result = null;
        operandR = null;
      }

      operator = button.textContent;

      if (operator == "+") {
        operatorFunc = add;
      } else if (operator == "-") {
        operatorFunc = subtract;
      } else if (operator == "*") {
        operatorFunc = multiply;
      } else {
        operatorFunc = divide;
      }
      console.log(operator);
      // console.log(operatorFunc);
    }

    if (button.textContent == "=") {
      if (operator != null && operandL != null && operandR != null) {
        getResult();
      } else {
        reset();
      }
      // console.log("execute");
    }

    if (button.textContent == "Clear") {
      reset();
      // console.log("clear");
    }
    console.log([button.textContent, operandL, operator, operandR, result]);
  }),
);
