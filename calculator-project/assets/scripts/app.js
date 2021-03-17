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
};

//Save operations to logEntries
const writeToLog = (logEntry) => {
    switch(logEntry.operation) {
        case '+': logEntry.operation = 'ADD';
        case '-': logEntry.operation = 'SUBTRACT';
        case '*': logEntry.operation = 'MULTIPLY';
        case '/': logEntry.operation = 'DIVIDE';
    }
    logEntries.push(logEntry);  
};

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
};

const calculateResult = (operation) => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    switch(operation) {
        case '+':
            currentResult += enteredNumber;
            break;
        case '-':
            currentResult -= enteredNumber;
            break;
        case '*':
            currentResult *= enteredNumber;
            break;
        case '/':
            currentResult /= enteredNumber;
            break;
        default: 
            alert('Invalid math operation input.');
            return; //break out of the function on error
    }
    writeOutput(operation, initialResult, enteredNumber);
};

//buttons are defined in vendor.js
addBtn.addEventListener('click', () => calculateResult('+'));
subtractBtn.addEventListener('click', () => calculateResult('-'));
multiplyBtn.addEventListener('click', () => calculateResult('*'));
divideBtn.addEventListener('click', () => calculateResult('/'));
