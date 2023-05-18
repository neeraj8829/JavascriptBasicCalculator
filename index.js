let numEl1 = document.getElementById("num1-el");
let numEl2 = document.getElementById("num2-el");
let result = document.getElementById("result");

let num1 = 0;
let num2 = 0;
let sum = 0;
let mul = 0;
let sub = 0;
let div = 0;

function incrementNum1() {
    num1++;
    numEl1.textContent = num1;

}

function decrementNum1() {
    num1--;
    numEl1.textContent = num1;
}


function incrementNum2() {
    num2++;
    numEl2.textContent = num2;

}

function decrementNum2() {
    num2--;
    numEl2.textContent = num2;
}


function resetValues() {
    numEl1.textContent = 0;
    numEl2.textContent = 0;
    result.textContent = 0;
}


function add() {
    sum = num1 + num2;
    result.textContent = sum;
}

function subtract() {
 sub = num1 - num2;
 result.textContent = sub;
}

function multiply() {
    mul = num1 * num2;
    result.textContent = mul;
}

function divide() {
    div = num1/num2;
    result.textContent = div;
}