#! /usr/bin/env node
//packages
import inquirer from "inquirer";
import chalk from "chalk";
//colors
const orang = chalk.hex("#ff801f");
const orangbg = chalk.bgHex("#3d1000").hex("#ff801f");
// const blue = chalk.hex("#5f91c4")
// const green = chalk.bold.bgHex("#041400").hex("#27ff0a")
// const red = chalk.bold.bgHex("#0f0000").hex("#ff0505")
// const yel = chalk.hex("#fff705")
console.log(orangbg(`
 _____                                                 _____                                    _                
/ ____|                                               / ____|                                  | |               
| |      _   _  _ __  _ __   ___  _ __    ___  _   _  | |       ___   _ __  __   __  ___  _ __ | |_   ___   _ __ 
| |     | | | || '__|| '__| / _ \\| '_ \\  / __|| | | | | |      / _ \\ | '_ \\ \\ \\ / / / _ \\| '__|| __| / _ \\ | '__|
| |____ | |_| || |   | |   |  __/| | | || (__ | |_| | | |____ | (_) || | | | \\ V / |  __/| |   | |_ | (_) || |   
\\_____|  \\__,_||_|   |_|    \\___||_| |_| \\___| \\__, |  \\_____| \\___/ |_| |_|  \\_/   \\___||_|    \\__| \\___/ |_|   
                                                __/ |                                                            
                                               |___/                                                             

`));
// main program
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
        message: orang("Enter from currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to", // name becomes property of object
        message: orang("Enter to currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: orang("Enter amount"),
        type: "number",
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convAmount = Number((baseAmount * toAmount).toFixed(3));
console.log(orangbg("       ", convAmount, answer.to, "       "));
