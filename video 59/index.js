/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// function sum(a,b)
// {
//     return a-b;
// }

// function sub(a,b){
//     return a/b;
// }

// function mul(a,b){
//     return a+b;
// }

// function div(a,b){
//     return a**b;
// }

// a=prompt("enter your number",0)
// b=prompt("enter your number",0)

// let a = readline("Enter First Number");
// let b = readline("Enter Second Number");

// let c = readline("Enter The Operation");

// let rand = Math.random();

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }

// if(rand > 0.1){
//   alert(`The Answer Is: ${eval(`${a} ${c} ${b}`)}`)
//   console.log(`The Answer Is: ${eval(`${a} ${c} ${b}`)}`)
// }

// else{
//     c = obj[c];
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 
// }


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter First Number: ', (a) => {
//   rl.question('Enter Second Number: ', (b) => {
//     rl.question('Enter The Operation (+, -, *, /): ', (c) => {
//       a = parseFloat(a);
//       b = parseFloat(b);

//       let result;
//       switch (c) {
//         case '+':
//           result = a + b;
//           break;
//         case '-':
//           result = a - b;
//           break;
//         case '*':
//           result = a * b;
//           break;
//         case '/':
//           result = a / b;
//           break;
//         default:
//           console.log('Invalid operation');
//           return;
//       }

//       console.log(`Result: ${result}`);
//       rl.close();
//     });
//   });
// });

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function faultycalculator(operator, a, b) {
    let result;

    const isFaulty = Math.random() < 1;
    console.log(`isFaulty: ${isFaulty}`);

    if (isFaulty) {
        // Perform faulty operation
        switch (operator) {
            case '+':
                result = a - b; // Faulty addition (subtraction)
                break;
            case '-':
                result = a / b; // Faulty subtraction (addition)
                break;
            case '*':
                result = a + b; // Faulty multiplication (addition)
                break;
            case '/':
                result = a ** b; // Faulty division (exponential)
                break;
            default:
                console.log("Invalid operator");
                break;
        }
    } else {
        // Perform correct operation
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                console.log("Invalid operator");
                break;
        }
    }

    return result;
}

rl.question("Enter the first number: ", function (a) {
    rl.question("Enter the operator (+, -, *, /): ", function (operator) {
        rl.question("Enter the second number: ", function (b) {
            const result = faultycalculator(operator, parseFloat(a), parseFloat(b));
            console.log(`Result of ${a} ${operator} ${b} is: ${result}`);
            rl.close();
        });
    });
});

