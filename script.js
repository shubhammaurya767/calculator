let buttons = document.getElementsByClassName("button");
let display = document.getElementById("display");
let operand1 = null;
let operator = null;
let currop = null;
let lastkeypress = -1; //equal=0 operator=1 dot=5 %=6 digit=7 
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        let value = this.getAttribute('data-value');
        if (isOperator(value)) {
            operator = value;
            if (operand1 == null)
                operand1 = currop;
            display.textContent = operand1 + " " + operator + " ";
            currop = null;
            console.log(operator);
            lastkeypress = 1;
        }
        else if (value == "c") {
            currop = null;
            operand1 = null;
            operator = null;
            display.textContent = "";
            lastkeypress = -1;
        }
        else if (value == "ce") {
            currop = null;
            if (operand1 != null && operator != null) {
                display.textContent = operand1 + " " + operator + " ";
                lastkeypress = 1;
            }
            else {
                display.textContent = "";
                lastkeypress = -1;
            }
        }
        else if (value == "sign") {
            if (currop != null) {
                currop = -1 * currop;
                if (operand1 != null) {
                    display.textContent = operand1 + " " + operator + " " + currop;
                }
                else {
                    display.textContent = currop;
                }
            }
        }
        else if (value == ".") {
            if (lastkeypress != 0) {
                if (currop == null) currop = "0.";
                else if (!currop.includes('.') && currop.length)
                    currop += '.';
                if (operand1 != null && operator != null)
                    display.textContent = operand1 + " " + operator + " " + currop;

                else
                    display.textContent = currop;
            }
            lastkeypress = 7;

        }
        else if (value == "%") {
            if (currop != null) currop = currop / 100;
            if (operand1 != null)
                display.textContent = operand1 + " " + operator + " " + currop;
            else display.textContent = currop;
            lastkeypress = 6;
        }
        else if (value == "=") {
            let result = -1;
            if (operand1 != null && operator != null && currop != null) {
                result = eval(operand1 + ' ' + operator + ' ' + currop);
                let ans = parseFloat(result.toFixed(9));
                display.textContent = ans;
                operand1 = result;
                operator = null;
                currop = null;
            }
            lastkeypress = 0;
        }
        else {
            if (lastkeypress == 0) {
                currop = value;
                operator = null;
                operand1 = null;
                display.textContent = value;
            }
            else {
                if (currop == null) currop = value;
                else
                    currop += value;
                console.log(currop);
                display.textContent += value;
            }
            lastkeypress = 7;
        }
    });
}
