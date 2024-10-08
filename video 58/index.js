// practice set
// 1. 
// let object ={
//     harry: 98,
//     shubham: 95,
//     ankit: 100,
// }

// for (const key in Object) {
//     console.log(
//         `${key} : ${Object[key]}`
//     )
// }

// q2 of practice set

// let keys = Object.keys(object);

// for(let i = 0; i< keys.length; i++){
//     let key = keys[i];
//     let value = object[key];
//     console.log(key + ":" + value);
// }

// const correct_number=45;

// for(number==12){
//     console.log("number is 12");
//     else{
//         console.log("try again");
//     }
// }

// const correctNumber = 42;
// // let userNumber;
// let userNumber = prompt("Enter the correct number:");

// while (userNumber !== correctNumber) {
//     if (userNumber !== correctNumber) {
//         alert("Try again");
//     }
// }

// alert("Congratulations! You've entered the correct number.");

// function findmean(num1,num2,num3,num4,num5){
//     const sum =num1+num2+num3+num4+num5;
//     const mean = sum/5;
//     return mean;
// }

// let a = findmean(50,40,80,90,60)
// console.log("mean is "+a);

function nice(name){
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are generous!")
    console.log("hey " + name + " you are beautiful!")
    console.log("hey " + name + " you are cute!")
    console.log("hey " + name + " your eyes are ocean of mine!")
}

nice("ayesha")

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);