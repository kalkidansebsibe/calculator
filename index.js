const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let firstInput = '';
let secondInput = '';
let operator = '';
let isSecondInput = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            if (!isSecondInput) {
                firstInput += value;
                display.textContent = firstInput;
            } else {
                secondInput += value;
                display.textContent = secondInput;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            isSecondInput = true;
        } else if (value === '=') {
            const num1 = parseFloat(firstInput);
            const num2 = parseFloat(secondInput);
            let result = '';

            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
            }

            display.textContent = result;
            // Reset for next input
            firstInput = result.toString();
            secondInput = '';
            operator = '';
            isSecondInput = false;
        }
    });
});


