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

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

let dugang = document.getElementById('add');
let kulang = document.getElementById('minus');
let tayms = document.getElementById('times');
let dibay = document.getElementById('divide');

let ans = document.getElementById('equals');

one.addEventListener("click", clickone);
two.addEventListener('click', clicktwo);

dugang.addEventListener('click', clickdugang);

ans.addEventListener('click', clickequals);

function clickone(){
    fnum += 1;
    //disp = fnum;
    document.getElementById('display').textContent = fnum;
}

function clicktwo(){
    snum+=2;
    document.getElementById('display').textContent = snum;
}

function clickdugang(){
    op = 'add'
}

function clickequals(){
    let s = operate(op,fnum,snum);
    document.getElementById('display').textContent = s;
}

function add(x,y){
    let sum = parseFloat(x) + parseFloat(y);
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
    if(operator == 'add'){
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