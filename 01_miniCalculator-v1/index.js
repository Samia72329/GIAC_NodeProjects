#! /usr/bin/env node
// to install inquirer package in directory
// npm i inquirer
// website: https://www.npmjs.com/package/inquirer
import inquirer from "inquirer";
import colors from 'colors';
// [{},{}] objects inside array
// prompt() is a function
console.log(colors.rainbow(`
____  ____  ____  ____  ____  ____  ____  ____  ____  ____ 
||C ||||a ||||l ||||c ||||u ||||l ||||a ||||t ||||o ||||r ||
||__||||__||||__||||__||||__||||__||||__||||__||||__||||__||
|/__\\||/__\\||/__\\||/__\\||/__\\||/__\\||/__\\||/__\\||/__\\||/__\\|
`));
const rb = colors.rainbow;
let status1;
do {
    const answer = await inquirer.prompt([
        {
            message: rb("Enter first number: "),
            type: "number",
            name: "firstNum"
        },
        {
            message: rb("Enter second number: "),
            type: "number",
            name: "secondNum"
        },
        {
            message: rb("Select operator "),
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
        if (answer.operator == "Addition") {
            console.log(`the sum of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum + answer.secondNum}`);
        }
        else if (answer.operator == "Subtraction") {
            console.log(`the subtrsction of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum - answer.secondNum}`);
        }
        else if (answer.operator == "Multiplication") {
            console.log(`the multipilcation of ${answer.firstNum} and ${answer.secondNum} is: ${answer.firstNum * answer.secondNum}`);
        }
        else if (answer.operator == "Division") {
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
            message: rb("continue? "),
            type: "list",
            name: "continue",
            choices: ["Yes", "No"]
        }]);
    // output: status1 = { continue: "Yes" }
    // output: status1 = { continue: "No" }
} while (status1.continue == "Yes");
console.log(rb(`

 _______                       __ 
/       \\                     /  |
$$$$$$$  | __    __   ______  $$ |
$$ |__$$ |/  |  /  | /      \\ $$ |
$$    $$< $$ |  $$ |/$$$$$$  |$$ |
$$$$$$$  |$$ |  $$ |$$    $$ |$$/ 
$$ |__$$ |$$ \\__$$ |$$$$$$$$/  __ 
$$    $$/ $$    $$ |$$       |/  |
$$$$$$$/   $$$$$$$ | $$$$$$$/ $$/ 
          /  \\__$$ |              
          $$    $$/               
           $$$$$$/                

`));
console.log(rb(`
+-++-++-+ +-++-++-+ +-++-++-++-++-+
|S||e||e| |Y||o||u| |A||g||a||i||n|
+-++-++-+ +-++-++-+ +-++-++-++-++-+
`));
