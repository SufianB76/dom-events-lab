/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = ''
let previousInput = ''
let operator = ''

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerText

        if (event.target.classList.contains('number')) {
            handleNumber(value)
        } else if (event.target.classList.contains('operator')) {
            handleOperator(value)
        } else if (event.target.classList.contains('equals')) {
            calculateResult()
        }
    });
});

/*-------------------------------- Functions --------------------------------*/


// Handles number button clicks.

function handleNumber(value) {
    currentInput += value
    display.textContent = currentInput
}


// Handles operator button clicks.

function handleOperator(value) {
    if (value === 'C') {
        resetCalculator()
    } else {
        previousInput = currentInput
        operator = value
        currentInput = ''
    }
}


// Calculates and displays the result

function calculateResult() {
    if (previousInput && currentInput && operator) {
        const result = evaluateExpression(previousInput, operator, currentInput)
        display.textContent = result
        currentInput = result
        previousInput = ''
        operator = ''
    }
}


// Evaluates the expression 

function evaluateExpression(num1, operator, num2) {
    const a = parseFloat(num1)
    const b = parseFloat(num2)

    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return b !== 0 ? a / b : 'Error'
        default:
            return ''
    }
}


// Resets the calculator 

function resetCalculator() {
    currentInput = ''
    previousInput = ''
    operator = ''
    display.textContent = '0'
}
