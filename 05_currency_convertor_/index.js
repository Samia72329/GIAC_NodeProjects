//packages
import inquirer from "inquirer";
//colors
const currency = {
    USD: 1, // base currency
    EUR: 0.92,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to", // name becomes property of object
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number",
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convAmount = Number((baseAmount * toAmount).toFixed(3));
console.log(convAmount, answer.to);
