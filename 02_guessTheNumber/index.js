#! /usr/bin/env node
/* write a program to guess the number betweeen 1 -100 */
console.log("Welcome to Guess The Hidden Number Game!");
console.log("Game Instructions:");
console.log("*You have to guess a number between 0 to 100\n*You have 100 attempts\n*Score will be calculated based on the number of attempts made.\n*The higher the attempts the lesser the score\n");
import inquirer from 'inquirer';
let hiddenNum = Math.round(Math.random() * 100);
// console.log(randomNum);
let chance = 100;
let answer;
do {
    answer = await inquirer.prompt([
        { name: "userInput",
            type: "number",
            message: "Guess the hidden number:", }
    ]);
    console.log(answer.userInput);
    chance--;
    if (answer.userInput === hiddenNum) {
        console.log("You guessed it right! :)");
        let score = chance + 1;
        console.log("Your score is: " + score);
        break;
    }
    else if (answer.userInput < hiddenNum) {
        console.log(`the hidden number is greater than guessed number :(\ntry again!!!\nchances left: ${chance}`);
    }
    else if (answer.userInput > hiddenNum) {
        console.log(`the hidden number is less than guessed number :(\ntry again!!!\nchances left: ${chance}`);
    }
} while (chance >= 1);
console.log(`the hidden number was ${hiddenNum}`);
