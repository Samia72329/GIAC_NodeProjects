#! /usr/bin/env node
import inquirer from "inquirer";
const viewList = () => {
    mylist.forEach((element, index) => {
        console.log(`Task ${index + 1}: ${element}`);
    });
};
const remove = (index) => {
    mylist.splice(index - 1, 1);
};
let mylist = [];
console.log(mylist.length);
let flag = true;
while (flag) {
    let actionqs = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Select anyone",
            choices: ["Add a new task", "Delete a task", "View To-do-List", "Exit"]
        },
    ]);
    switch (actionqs.action) {
        case "Add a new task":
            let taskqs = await inquirer.prompt([
                {
                    name: "task",
                    type: "input",
                    message: "Add task:",
                },
            ]);
            mylist.push(taskqs.task);
            break;
        case "Delete a task":
            let removeqs = await inquirer.prompt([
                {
                    name: "remove",
                    type: "input",
                    message: "Enter task number to remove:",
                },
            ]);
            if (removeqs.remove - 1 < 0) {
                console.log("invalid task number");
            }
            else if (removeqs.remove > mylist.length) {
                console.log("invalid task number");
            }
            else {
                remove(removeqs.remove); // removes task at the specified index
            }
            break;
        case "View To-do-List":
            if (mylist.length == 0) {
                console.log("Empty List");
            }
            else {
                viewList();
            }
            break;
        case "Exit":
            flag = false;
            break;
    }
}
console.log("--- Bye! See you again! ---");
