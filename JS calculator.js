// Simple calculator: reads two numbers, applies the chosen operation and shows the result.
console.log("calculator.js loaded");
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("calc-form");
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var operation = document.getElementById("operation");
  var result = document.getElementById("calc-result");

  // Show a message in the result paragraph (green for success, red for errors)
  function showResult(message, isError) {
    result.textContent = message;
    result.className = "form-feedback " + (isError ? "failure" : "success");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. Make sure both boxes are filled in.
    //    (An empty box would turn into 0 and hide the mistake.)
    if (num1.value === "" || num2.value === "") {
      showResult("Please enter both numbers.", true);
      return;
    }

    // 2. Convert the text in the boxes into real numbers.
    //    Without this, "2" + "3" would give "23" instead of 5.
    var a = Number(num1.value);
    var b = Number(num2.value);

    if (isNaN(a) || isNaN(b)) {
      showResult("Please enter valid numbers.", true);
      return;
    }

    // 3. Work out the answer for the chosen operation.
    var answer;
    var symbol;

    switch (operation.value) {
      case "add":
        answer = a + b;
        symbol = "+";
        break;
      case "subtract":
        answer = a - b;
        symbol = "−";
        break;
      case "multiply":
        answer = a * b;
        symbol = "×";
        break;
      case "divide":
        // 4. JavaScript returns Infinity when dividing by zero, so check first.
        if (b === 0) {
          showResult("You can't divide by zero.", true);
          return;
        }
        answer = a / b;
        symbol = "÷";
        break;
      default:
        showResult("Please choose an operation.", true);
        return;
    }

    // 5. Round away tiny computer errors (0.1 + 0.2 gives 0.30000000000000004)
    //    and show the full calculation.
    var rounded = parseFloat(answer.toFixed(10));
    showResult(a + " " + symbol + " " + b + " = " + rounded, false);
  });
})