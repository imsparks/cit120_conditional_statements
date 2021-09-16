var ele = document.querySelector(".box");


//Prompt to enter first number and check if number. If number, store value.
var inputNumber1 = (prompt("Enter first number"));

if(isNaN(inputNumber1)){
    ele.innerHTML = "Sorry that is not a number.";
    system.exit(0);
} else{
    var number1 = Number(inputNumber1);
}

// Prompt to input operator and check if one of mathematical operators
var inputOperator = prompt("Enter an operator");

if(inputOperator == "+"){
    var operator = inputOperator;
} else if(inputOperator == "-") {
    var operator = inputOperator;
} else if(inputOperator == "*") {
    var operator = inputOperator;
} else if(inputOperator == "/") {
    var operator = inputOperator;
} else if(inputOperator == "**") {
    var operator = inputOperator;
}
else{
    ele.innerHTML = "That is not an operator, please enter one of the following: +,-,*,/,**";
    system.exit(0);
}

//Prompt to enter second number and check if number. If number, store value.
var inputNumber2 = (prompt("Enter second number"));

if(isNaN(inputNumber2)){
    ele.innerHTML = "Sorry that is not a number.";
    system.exit(0);
} else{
    var number2 = Number(inputNumber2);
}

//Create math equations using operators
if(operator == "+"){
    ele.innerHTML = number1 + number2;
} else if(operator == "-"){
    ele.innerHTML = number1 - number2;
} else if(operator == "*"){
    ele.innerHTML = number1 * number2;
} else if(operator == "/"){
    ele.innerHTML = number1 / number2;
} else if(operator == "**"){
    ele.innerHTML = number1 ** number2;
}

//Not gonna lie, this was hard and took me about 3 hours to figure out. But I am glad I did.