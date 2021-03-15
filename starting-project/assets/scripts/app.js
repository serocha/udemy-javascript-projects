/* 
    A short project to run a funky calculator app for a Udemy course.
    Takes a number input, converts to integer, performs a simple math operation.
    Also showcases the last operation as a string.
*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Takes the number string from the userInput field
const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

//Save operations to logEntries
const writeToLog = (logEntry) => {

    switch (logEntry.operation) {
        case '+': logEntry.operation = 'ADD';
        case '-': logEntry.operation = 'SUBTRACT';
        case '*': logEntry.operation = 'MULTIPLY';
        case '/': logEntry.operation = 'DIVIDE';
    }

    logEntries.push(logEntry);  
}

//Prints string of current operation
const writeOutput = ( operator, initialResult, enteredNumber) => {
    const calcDescription = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDescription); //function from vendor field
    
    const logEntry = {
        operation: operator,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    writeToLog(logEntry);
}

const add = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initialResult, enteredNumber);
}

const subtract = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    writeOutput('*', initialResult, enteredNumber);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/', initialResult, enteredNumber);
}

//buttons are defined in vendor.js
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
