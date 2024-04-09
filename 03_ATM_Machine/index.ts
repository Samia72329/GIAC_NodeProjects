#! /usr/bin/env node
import inquirer from 'inquirer'
//inquirer is a module or package
console.log("


_      _____   __  __                              
/ \    |_   _| |  \/  |                             
/ _ \     | |   | |\/| |                             
/ ___ \    | |   | |  | |                             
/_/__ \_\   |_|   |_|  |_| _  __                       
| __ )     / \    | \ | | | |/ /                       
|  _ \    / _ \   |  \| | | ' /                        
| |_) |  / ___ \  | |\  | | . \                        
|____/  /_/___\_\_|_| \_|_|_|\_\_  ___    ____   _____ 
/ ___|  | ____| |  _ \  \ \   / / |_ _|  / ___| | ____|
\___ \  |  _|   | |_) |  \ \ / /   | |  | |     |  _|  
___) | | |___  |  _ <    \ V /    | |  | |___  | |___ 
|____/  |_____| |_| \_\    \_/    |___|  \____| |_____|
                                                    
                                                      

")
let myBalance: number = 10000;
let myPin: number = 1234;
let attempts: number = 0;
console.log(`---Default pin: ${myPin}---`);
console.log(`---Default balance amount: ${myBalance} Rs---`);

do {
let pinFlag = false;
    let pinData = await inquirer.prompt(
        [
            {
                name: "pin",
                message: "Enter pin:",
                type: "number",
            }
        ]
    );
    if (pinData.pin === myPin) {
        console.log("---Pin Verified---");
        let actionData = await inquirer.prompt(
            [
                {
                    name: "action",
                    message: "Select required operation:",
                    type: "list",
                    choices: ["Cash Withdrawal", "Fast Cash", "Deposit", "Balance Enquiry","Pin Change"]
                }
            ]

        );

        if (actionData.action === "Cash Withdrawal") {
            console.log("   Amount must be multiple of 500  ");
            let withdrawalData = await inquirer.prompt(
                [
                    {
                        name: "withdrawalAmt",
                        message: "Enter Amount:",
                        type: "number",

                    }
                ]

            )

            if (withdrawalData.withdrawalAmt % 500 === 0) {
                if (myBalance - withdrawalData.withdrawalAmt < 0) {
                    console.log("Insufficient Balance");
                }
                else {
                    console.log(`Your account is debited with ${withdrawalData.withdrawalAmt} Rs `);
                    myBalance -= withdrawalData.withdrawalAmt;
                    console.log(`New Balance: ${myBalance} Rs `);


                }
            }
            else {
                console.log(`Enter amount multiple of 500`);
            }

        }

        else if (actionData.action === "Fast Cash") {
            let fastCashData = await inquirer.prompt(
                [
                    {
                        name: "fastCashAmt",
                        message: "Select:",
                        type: "list",
                        choices: [1000, 2000, 5000, 10000,],
                    }
                ]

            )
            if (myBalance - fastCashData.fastCashAmt < 0)
                console.log("Insufficient Balance");
            else {
                console.log(`Your account is debited with ${fastCashData.fastCashAmt} Rs `);
                myBalance -= fastCashData.fastCashAmt;
                console.log(`New Balance: ${myBalance} Rs `);

            }
        }

        else if (actionData.action === "Deposit") {
            let depositData = await inquirer.prompt(
                [
                    {
                        name: "depositAmt",
                        message: "Enter amount to be deposited:",
                        type: "number",

                    }
                ]

            )
            console.log(`Your account is credited with ${depositData.depositAmt} Rs `);
            myBalance += depositData.depositAmt;
            console.log(`New Balance: ${myBalance} Rs `);


        }
        else if (actionData.action === "Balance Enquiry") {
            console.log(`Balance amount:${myBalance}`);
        }
        else if (actionData.action === "Pin Change") {
            let newPinData = await inquirer.prompt(
                [
                    {
                        name: "newPin",
                        message: "Enter 4 digit new pin:",
                        type: "number",

                    }
                ]

            )
            myPin = newPinData.newPin;
            pinFlag = true;
            console.log("Pin is changed successfully")
    }
    if (!pinFlag)
    break;
    }
    else {
        console.log("Access Denied");
        console.log(`Login Attmepts left: ${2 - attempts} `)
        if (attempts === 2) {
            console.log("Account is locked")
        }
        attempts++
    }
} while (attempts < 3)
