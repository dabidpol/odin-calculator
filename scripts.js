let a = 2
let b = 2
let z = '/'

console.log(operate(z,a,b));
console.log(operate(z,a,b));
console.log(operate(z,a,b));
console.log(operate(z,a,b));

let disp = document.querySelector('#display');
let op = '';
let fnum = '';
let snum = '';
let numbers = document.querySelectorAll('button');

function firstnum(input){
    fnum = input;
    disp.textContent = input;
}

function secondnum(input){
    snum = input;
    disp.textContent = input;
}

// document.addEventListener('click', function(){
//     let clicked = document.getElementById('num').value
//     firstnum(clicked)
// });


function add(x,y){
    let sum = x + y;
    return sum;
}

function subtract(x,y){
    let diff = x - y;
    return diff;
}

function times(x,y){
    let prod = x * y;
    return prod;
}

function divide(x,y){
    let ans = x/y;
    return ans;
}

function operate (operator,a,b){
    if(operator == '+'){
        return add(a,b);
    }else if(operator == '-'){
        return subtract(a,b);
    }else if(operator == '*'){
        return times(a,b);
    }else if(operator == "/"){
        return divide(a,b);
    }else{
        return;
    }
}

const clear = document.querySelector('#reset');
clear.addEventListener('click', function(){
    clearDisplay();
});

function clearDisplay(){
    disp.textContent = '';
    fnum = '';
    snum = '';
    operator = '';
}