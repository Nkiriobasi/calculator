const userInput = document.querySelector("#userInput");

let expression = '';

// The press function
function press(num){
    expression += num;
    userInput.value = expression;
}

// The equal function
function equal(){
    userInput.value = eval(expression);
    // After the evaluation clear the inputfield
    expression = '';
}

// The clear function
function erase(){
    expression = '';
    userInput.value = expression;
}