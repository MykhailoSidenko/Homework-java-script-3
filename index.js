"use strict"
    
let num1, num2, operation;


    do {
        num1 = prompt('Number 1'); // "123"
    } while (isNaN(+num1) || num1 === null || num1.trim().length <= 0);

    do {
        num2 = prompt('Number 2'); // "123"
    } while (isNaN(+num1) || num1 === null || num1.trim().length <= 0 );

    do {
        operation = prompt('operation'); // '+' | '-' | '*' | '/'
        console.log(operation)
    } while (operation.trim() !== '-' && operation.trim() !== '+' && operation.trim() !== '*' && operation.trim() !== '/');



function myCalculate(a,b,operate) {
switch(operate){
case '+': 
console.log(+a + +b)
alert(+a + +b)
break;
case '-':
console.log(a - b)
break;
case '*':
console.log(a * b)
break;
case '/':
console.log(a / b)
break;
default:
    throw new Error('Not valid')
  }
console.log(  'num1:',a,'num2:',b,'operation:',operate )
}

myCalculate(num1,num2,operation)