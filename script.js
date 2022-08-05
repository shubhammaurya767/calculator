let buttons = document.getElementsByClassName("button");
let display = document.getElementById("display");
let prevdisplay ="";
let operand1 = 0;
let operand2 = null;
let operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        let value = this.getAttribute('data-value');
        let text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } 
        else if (value == "ac") {
            display.textContent = "";
        } 
        else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } 
        else if (value == ".") {
            if (!text.includes('.')) {
                if(text.length)
                    display.textContent = text + '.';
                else
                    display.textContent = "0.";
            }
        } 
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        } 
        else if (value == "=") {
            operand2 = parseFloat(text);
            let result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}
