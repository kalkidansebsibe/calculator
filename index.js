const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let firstInput = '';
let secondInput = '';
let operator = '';
let isSecondInput = false;

function updateDisplay(value) {
    display.textContent = value || '0';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            if (!isSecondInput) {
                firstInput += value;
                updateDisplay(firstInput);
            } else {
                secondInput += value;
                updateDisplay(secondInput);
            }

        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstInput !== '') {
                operator = value;
                isSecondInput = true;
            }

        } else if (value === '=') {
            if (firstInput && secondInput && operator) {
                const num1 = parseFloat(firstInput);
                const num2 = parseFloat(secondInput);
                let result;

                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
                }

                updateDisplay(result);
                firstInput = result.toString();
                secondInput = '';
                operator = '';
                isSecondInput = false;
            }

        } else if (value === 'Clear') {
            firstInput = '';
            secondInput = '';
            operator = '';
            isSecondInput = false;
            updateDisplay('');

        } else if (value === 'delete') {
            if (isSecondInput && secondInput !== '') {
                secondInput = secondInput.slice(0, -1);
                updateDisplay(secondInput);
            } else if (!isSecondInput && firstInput !== '') {
                firstInput = firstInput.slice(0, -1);
                updateDisplay(firstInput);
            }
        }
    });
    
});
