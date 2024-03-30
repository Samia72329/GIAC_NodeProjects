#! /usr/bin/env node
// to install inquirer package in directory
// npm i inquirer
// website: https://www.npmjs.com/package/inquirer
import inquirer from "inquirer";
// [{},{}] objects inside array
// prompt() is a function
let status1;
do {
    const answer = await inquirer.prompt([
        {
            message: "Enter first number ",
            type: "number",
            name: "firstNum"
        },
        {
            message: "Enter second number ",
            type: "number",
            name: "secondNum"
        },
        {
            message: "Select operator ",
            type: "list",
            name: "operator",
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
    ]);
    // console.log(answer);
    // output: answer = { firstNum: 10,
    //                    secondNum: 5,
    //                    operator: 'Addition' }
    // answer is an typescript object having key ; value pairs
    // conditional statements
    {
        if (answer.operator === "Addition") {
            console.log(`the sum of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum + answer.secondNum}`);
        }
        else if (answer.operator === "Subtraction") {
            console.log(`the subtrsction of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum - answer.secondNum}`);
        }
        else if (answer.operator === "Multiplication") {
            console.log(`the multipilcation of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum * answer.secondNum}`);
        }
        else if (answer.operator === "Division") {
            if (answer.secondNum === 0)
                console.log("Cannot divide by zero");
            else
                console.log(`the division of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum / answer.secondNum}`);
        }
        else {
            console.log("Invalid operator");
        }
    }
    status1 = await inquirer.prompt([{
            message: "continue? ",
            type: "list",
            name: "continue",
            choices: ["Yes", "No"]
        }]);
    // output: status1 = { continue: "Yes" }
    // output: status1 = { continue: "No" }
} while (status1.continue == "Yes");
console.log("Bye! See you again :)");
