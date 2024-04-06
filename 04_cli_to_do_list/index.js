#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const green = chalk.bold.bgHex("#041400").hex("#27ff0a");
const red = chalk.bold.bgHex("#0f0000").hex("#ff0505");
const yel = chalk.hex("#fff705");
const cyan = chalk.hex("#1afff7");
const pink = chalk.hex("#f50f73");
let myTask = [];
// function definition
const viewTask = () => {
    if (myTask.length == 0) {
        console.log(cyan(`
        +-++-++-++-++-+ +-++-++-++-+
        |e||m||p||t||y| |l||i||s||t|
        +-++-++-++-++-+ +-++-++-++-+
        `));
    }
    else {
        console.log(pink(`
        +-++-+ +-++-+ +-++-++-++-+
        |t||o| |d||o| |l||i||s||t|
        +-++-+ +-++-+ +-++-++-++-+
        `));
        myTask.forEach((element, index) => {
            console.log(pink(`          Task ${index + 1}: ${element}`));
        });
    }
};
const remove = async () => {
    if (myTask.length == 0) {
        console.log(cyan(`
        +-++-++-++-++-++-++-+ +-++-+ +-++-++-++-++-++-+
        |n||o||t||h||i||n||g| |t||o| |d||e||l||e||t||e|
        +-++-++-++-++-++-++-+ +-++-+ +-++-++-++-++-++-+
        `));
    }
    else {
        await inquirer.prompt([
            {
                name: "delTask",
                type: "list",
                message: yel("Select task to remove"),
                choices: myTask,
            },
        ]).then((answer) => {
            let remTask = myTask.splice(myTask.indexOf(answer.delTask), 1); // removes task at the specified index
            console.log(red(`     Succesfully removed: "${remTask}" from your to-do list      `));
        });
    }
};
const addTask = async () => {
    await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: yel("Add task:"),
        },
    ]).then((answer) => {
        if (answer.add != "") {
            let len = myTask.push(answer.add);
            console.log(green(`     Succesfully added: "${myTask[len - 1]}" in your to-do list      `));
        }
        else
            console.log("Task cannot be empty");
    });
};
const toDoList = async () => {
    await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: yel('|S||E||L||E||C||T|'),
            // choices: [pink("Add task"), pink("Delete task"), pink("View tasks"), pink("Exit")]
            choices: ["Add task", "Delete task", "View tasks", "Exit"]
        },
    ]).then(async (answer) => {
        switch (answer.action) {
            case "Add task":
                await addTask();
                break;
            case "Delete task":
                await remove();
                break;
            case "View tasks":
                viewTask();
                break;
            case "Exit":
                flag = false;
                break;
        }
    });
};
console.log(green(`
.########..#######.....########...#######.....##.......####..######..########
....##....##.....##....##.....##.##.....##....##........##..##....##....##...
....##....##.....##....##.....##.##.....##....##........##..##..........##...
....##....##.....##....##.....##.##.....##....##........##...######.....##...
....##....##.....##....##.....##.##.....##....##........##........##....##...
....##....##.....##....##.....##.##.....##....##........##..##....##....##...
....##.....#######.....########...#######.....########.####..######.....##...
`));
let flag = true;
while (flag) {
    await toDoList();
}
console.log("--- Bye! See you again! ---");
