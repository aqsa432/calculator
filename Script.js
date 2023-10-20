document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector("#display");
  
    // Function to update the display
    function updateDisplay(value) {
      display.value = value;
    }
  
    // Event listeners for number buttons
    for (let i = 0; i <= 9; i++) {
      document.getElementById(`${i}Button`).addEventListener("click", function () {
        appendToDisplay(i);
      });
    }
  
    // Event listeners for operator buttons
    document.getElementById("decimalButton").addEventListener("click", function () {
      appendToDisplay(".");
    });
  
    document.getElementById("addButton").addEventListener("click", function () {
      appendToDisplay("+");
    });
  
    document.getElementById("subtractButton").addEventListener("click", function () {
      appendToDisplay("-");
    });
  
    document.getElementById("multiplyButton").addEventListener("click", function () {
      appendToDisplay("*");
    });
  
    document.getElementById("divideButton").addEventListener("click", function () {
      appendToDisplay("/");
    });
  
    // Event listener for clear button
    document.getElementById("clearButton").addEventListener("click", function () {
      clearDisplay();
    });
  
    // Event listener for delete button
    document.getElementById("deleteButton").addEventListener("click", function () {
      deleteLastChar();
    });
  
    // Event listener for equals button
    document.getElementById("equalsButton").addEventListener("click", function () {
      calculate();
    });
  
    // Function to clear the display
    function clearDisplay() {
      updateDisplay("");
    }
  
    // Function to delete the last character
    function deleteLastChar() {
      let currentDisplay = display.value;
      if (currentDisplay.length > 0) {
        updateDisplay(currentDisplay.slice(0, -1));
      }
    }
  
    // Function to append characters to the display
    function appendToDisplay(value) {
      let currentDisplay = display.value;
      if (currentDisplay === "Error") {
        updateDisplay(value);
      } else {
        updateDisplay(currentDisplay + value);
      }
    }
  
    // Function to calculate the result
    function calculate() {
      try {
        let result = eval(display.value);
        updateDisplay(result);
      } catch (error) {
        updateDisplay("Error");
      }
    }
  });
  