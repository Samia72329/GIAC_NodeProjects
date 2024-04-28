#! /usr/bin/env node
// word counter
/*
The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.
*/
import inquirer from  "inquirer"
import chalk from "chalk";
let blu = chalk.hex("#17edfd").bgHex("#06001e")
console.log(blu(`
        _  _  _  _____   ______ ______       _______  _____  _     _ __   _ _______ _______  ______  
        |  |  | |     | |_____/ |     \\      |       |     | |     | | \\  |    |    |______ |_____/  
        |__|__| |_____| |    \\_ |_____/      |_____  |_____| |_____| |  \\_|    |    |______ |    \\_  
`));
const answer : {
    sentence : string,

} = await inquirer.prompt([{
    name : "sentence",
    type : "input",
    message : blu("Enter sentence:"),
}])
// typescript - compiled language
// javascript - interpreted language
const words = answer.sentence.trim().split(" ");
console.log(`the sentence has ${blu(words.length)} words`);
