let currentInput = "";
let previousInput = "";
let operator = "";

function handleNumber(num) {
    if (num === "." && currentInput.includes(".")) return;

    currentInput += num;
    updateDisplay();
}

function handleOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    let result;

    switch (operator) {

        case "+": result = a + b;
        break;
        case "-":
            result = a - b;
        break;
        case "*": result = a * b;
        break;
        case "/": result = b !== 0 ? a / b : "Error";
        break;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay();
}

function Clear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function updateDisplay() {
    document.getElementById("display").value = currentInput || "0";
}



