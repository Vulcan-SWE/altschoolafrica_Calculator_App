// The JavaScript calculator code



//Using DOM manupulation to create a simple calculator
// The calculator supports basic operations and maintains a history of calculations

/*  The id "display", id="history" and class"button"was targeted using DOM manipulation and 
    assigned to the variable display and historyButtons respectively*/
const display = document.getElementById("display");
const historyButtons = document.querySelectorAll("#history button");

let history = [];            // Stores previous calculations
let historyIndex = -1;       // Index for navigating history

//This function adds (appends) a new character or value (like a number or operator) to the calculator's display.
function appendToDisplay(input) {
    display.value += input;
}

//This function deletes the last character or input from the calculator's display
function deleteOneOnDisplay() {
    display.value = display.value.slice(0, -1);
}

//This function clears the entire display of the calculator
function wipeDisplay() {
    display.value = "";
}

// This function calculates the expression in the display and updates the display with the result.
function calculate() {
    try {
        const result = eval(display.value);
        if (display.value !== "") {
            history.push(result);            // Save result to history
            historyIndex = history.length;  // Reset to end
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Navigate history with < and > buttons
historyButtons[0].addEventListener("click", () => {
    // "<" button
    if (historyIndex > 0) {
        historyIndex--;
        display.value = history[historyIndex];
    }
});

historyButtons[1].addEventListener("click", () => {
    // ">" button
    if (historyIndex < history.length - 1) {
        historyIndex++;
        display.value = history[historyIndex];
    }
});
