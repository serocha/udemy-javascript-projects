const defaultTotal = 0;
let currentTotal = defaultTotal;

const add = () => {
    currentTotal += userInput.value;
    outputResult(currentTotal, '')
}

const subtract = () => {
    currentTotal -= num;
}

const multiply = (num) => {
    currentTotal *= num;
}

const divide = (num) => {
    currentTotal /= num;
}

addBtn.addEventListener( 'click', add );
