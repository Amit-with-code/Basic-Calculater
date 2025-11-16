const display = document.getElementById("display");

function appendValue(val) {
    const lastChar = display.textContent.slice(-1);
    const operators = "+-*/";
    const negtiveNumber = "+*/";

    // If display shows Error, reset on next input
    if (display.textContent === "Error") {
        display.textContent = "0";
    }

    // Prevent double operators
    if (operators.includes(val) && operators.includes(lastChar)) {
        return; // Do nothing
    }

    // Prevent operator at start
    if (display.textContent === "0") {
        if (!negtiveNumber .includes(val)) {
            display.textContent = val; // Replace default 0
        }
        return;
    }

    // Append normal values
    display.textContent += val;
}

function clearDisplay() {
    display.textContent = "0";
}

function calculateResult() {
    try {
        const expression = display.textContent;

        // Prevent evaluation ending with an operator like "5+"
        const lastChar = expression.slice(-1);
        const operators = "+-*/";

        if (operators.includes(lastChar)) {
            display.textContent = "Error";
            return;
        }

        const result = eval(expression);

        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.textContent = "Error";
        } else {
            display.textContent = result;
        }
    } catch {
        display.textContent = "Error";
    }
}
