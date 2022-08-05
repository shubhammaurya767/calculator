let buttons = document.getElementsByClassName("button");
let display = document.getElementById("display");
let operand1 = null;
let operator = null;
let currop = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        let value = this.getAttribute('data-value');
        if (isOperator(value)) {
            operator = value;
            if(operand1==null)
                operand1=currop;
            display.textContent =operand1+" "+operator+" ";
            currop=null;
            console.log(operator);
        } 
        else if(value == "c")
        {
            currop=null;
            operand1=null;
            operator=null;
            display.textContent="";
        }
        else if (value == "ce") {
            currop=null;
            if(operand1!=null)
                display.textContent = operand1+" "+operator+" ";
            else
                display.textContent = "";
        } 
        else if (value == "sign") {
            if(currop!=null)
            {
                currop = -1 * currop;
            if(operand1!=null)
            {
                display.textContent = operand1 + " "+ operator + " "+ currop;
            }
            else {
                display.textContent = currop;
            } 
        }  
        } 
        else if (value == ".") {
            if(currop==null) currop="0.";
            else if (!currop.includes('.') && currop.length)
                    currop += '.';
                if(operand1!=null)
                    display.textContent = operand1 + " " + operator + " "+ currop;
                else display.textContent = currop;
            
        } 
        else if (value == "%") {
            if(currop!=null) currop=currop/100;
            if(operand1!=null)
                    display.textContent = operand1 + " " + operator + " "+ currop;
            else display.textContent = currop;
        } 
        else if (value == "=") {
            let result=-1;
            if(operand1!=null && operator!=null && currop!=null)
            {
                result = eval(operand1 + ' ' + operator + ' ' + currop);
                display.textContent=result;
                operand1=result;
                operator=null;
                currop=null;
            }
        } 
        else {
            if(currop==null) currop=value;
            else
                currop+=value;
            console.log(currop);
            display.textContent+=value;
        }
    });
}
