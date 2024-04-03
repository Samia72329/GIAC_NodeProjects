#! /usr/bin/env node
/* write a program to guess the number betweeen 1 -100 */
import inquirer from 'inquirer';
import chalk from 'chalk';
const pink = chalk.hex('#e647db');
const green = chalk.hex('#2be35c');
console.log(pink(`

██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗ 
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝                                                             
`));
console.log(green(`      
_____                        _____  _           _____  _    _    _              _____              _             
|   __| _ _  ___  ___  ___   |_   _|| |_  ___   |  |  ||_| _| | _| | ___  ___   |   | | _ _  _____ | |_  ___  ___ 
|  |  || | || -_||_ -||_ -|    | |  |   || -_|  |     || || . || . || -_||   |  | | | || | ||     || . || -_||  _|
|_____||___||___||___||___|    |_|  |_|_||___|  |__|__||_||___||___||___||_|_|  |_|___||___||_|_|_||___||___||_|  
                                                                                                                  

`));
console.log(green("Game Instructions:"));
console.log(green(("*You have to guess a number between 0 to 100\n*You have 100 attempts\n*Score will be calculated based on the number of attempts made.\n*The higher the attempts the lesser the score\n")));
let hiddenNum = Math.round(Math.random() * 100);
// console.log(randomNum);
let chance = 100;
let answer;
do {
    answer = await inquirer.prompt([
        { name: "userInput",
            type: "number",
            message: pink("Guess the hidden number:"), }
    ]);
    console.log(answer.userInput);
    chance--;
    if (answer.userInput === hiddenNum) {
        console.log(green(`                    
                                        __   
      __ __              _ _ _  _      |  |  
     |  |  | ___  _ _   | | | ||_| ___ |  |  
     |_   _|| . || | |  | | | || ||   ||__|  
       |_|  |___||___|  |_____||_||_|_||__|  
                                             
     
      `));
        let score = chance + 1;
        console.log(green("Your score is: ") + score);
        break;
    }
    else if (answer.userInput < hiddenNum) {
        console.log(green(`the hidden number is greater than guessed number :(\ntry again!!!\nchances left: ${chance}`));
    }
    else if (answer.userInput > hiddenNum) {
        console.log(green(`the hidden number is less than guessed number :(\ntry again!!!\nchances left: ${chance}`));
    }
} while (chance >= 1);
console.log(pink(`the hidden number was ${hiddenNum}`));
