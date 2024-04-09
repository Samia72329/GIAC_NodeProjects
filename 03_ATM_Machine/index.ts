#! /usr/bin/env node

// packages
import inquirer from 'inquirer'
import chalk from 'chalk'
//inquirer is a module or package

//colors
const cyan = chalk.bgHex('#000329').hex("#14fffb")
const blue = chalk.hex("#5f91c4")
const green = chalk.bold.bgHex("#041400").hex("#27ff0a")
const red = chalk.bold.bgHex("#0f0000").hex("#ff0505")
const yel = chalk.hex("#fff705")

// main program
let myBalance: number = 100000;
let myPin: number = 1111;
let attempts: number = 0;
console.log(cyan(`
 .------------------. .-----------------. .-----------------.
 | .--------------. || .--------------. || .--------------. |
 | |      __      | || |  _________   | || | ____    ____ | |
 | |     /  \\     | || | |  _   _  |  | || ||_   \\  /   _|| |
 | |    / /\\ \\    | || | |_/ | | \\_|  | || |  |   \\\/   |  | |
 | |   / ____ \\   | || |     | |      | || |  | |\\  /| |  | |
 | | _/ /    \\ \\_ | || |    _| |_     | || | _| |_\\/_| |_ | |
 | ||____|  |____|| || |   |_____|    | || ||_____||_____|| |
 | |              | || |              | || |              | |
 | '--------------' || '--------------' || '--------------' |
 '------------------' '-----------------' '-----------------'

`));
console.log(blue("Default pin"), cyan(myPin));
console.log(blue("---Default balance amount:"), cyan(myBalance), blue("Rs---"));

do {
let pinFlag = false;
    let pinData = await inquirer.prompt(
        [
            {
                name: "pin",
                message: cyan("Enter pin:"),
                type: "number",
            }
        ]
    );
    if (pinData.pin === myPin) {
        console.log(green(" ---Pin Verified---  "));
        let actionData = await inquirer.prompt(
            [
                {
                    name: "action",
                    message: cyan("Select required operation:"),
                    type: "list",
                    choices: ["Cash Withdrawal", "Fast Cash", "Deposit", "Balance Enquiry","Reset Pin"]
                }
            ]

        );

        if (actionData.action === "Cash Withdrawal") {
            console.log(yel("   Amount must be multiple of 500  "));
            let withdrawalData = await inquirer.prompt(
                [
                    {
                        name: "withdrawalAmt",
                        message: cyan("Enter Amount:"),
                        type: "number",

                    }
                ]

            )

            if (withdrawalData.withdrawalAmt % 500 === 0) {
                if (myBalance - withdrawalData.withdrawalAmt < 0) {
                    console.log(red("Insufficient Balance"));
                }
                else {
                    console.log(blue("Your account is debited with" ,cyan(withdrawalData.withdrawalAmt), "Rs"));
                    myBalance -= withdrawalData.withdrawalAmt;
                    console.log(blue("New Balance:") ,cyan(myBalance), blue("Rs" ));
                }
            }
            else {
                console.log(yel(`   Amount must be multiple of 500    `));
                // pinFlag = true;
            }

        }

        else if (actionData.action === "Fast Cash") {
            let fastCashData = await inquirer.prompt(
                [
                    {
                        name: "fastCashAmt",
                        message: cyan("Select:"),
                        type: "list",
                        choices: [1000, 2000, 5000, 10000,],
                    }
                ]

            )
            if (myBalance - fastCashData.fastCashAmt < 0)
                console.log(red("Insufficient Balance"));
            else {
                console.log(blue("Your account is debited with"), cyan(fastCashData.fastCashAmt), blue("Rs" ));
                myBalance -= fastCashData.fastCashAmt;
                console.log(blue("New Balance:"), cyan(myBalance), blue("Rs"));

            }
        }

        else if (actionData.action === "Deposit") {
            let depositData = await inquirer.prompt(
                [
                    {
                        name: "depositAmt",
                        message: cyan("Enter amount to be deposited:"),
                        type: "number",

                    }
                ]

            )
            console.log(blue("Your account is credited with"), cyan(depositData.depositAmt), blue("Rs"));
            myBalance += depositData.depositAmt;
            console.log(blue("New Balance:"), cyan(myBalance), blue("Rs" ));


        }
        else if (actionData.action === "Balance Enquiry") {
            console.log(blue("Balance amount:"), cyan(myBalance));
        }
        else if (actionData.action === "Reset Pin") {
            let newPinData = await inquirer.prompt(
                [
                    {
                        name: "newPin",
                        message: cyan("Enter 4 digit new pin:"),
                        type: "number",

                    }
                ]

            )
            myPin = newPinData.newPin;
            pinFlag = true;
            console.log(green("---Pin is changed successfully---"));
    }
    if (!pinFlag)
    break;
    }
    else {
        console.log(red("   ---Access Denied---   "));
        console.log(blue(`Attmepts left: ${2 - attempts} `))
        if (attempts === 2) {
            console.log(red("   ---Account is locked--- "))
        }
        attempts++
    }
console.log(cyan(`
`))
} while (attempts < 3)

