#! /usr/bin/evn node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 2 + 1);
const answear = await inquirer.prompt([{
        name: "guessnumber",
        type: "number",
        message: "type a number",
    }
]);
if (answear.guessnumber === randomnumber) {
    console.log("congratulte you type a right number");
}
else {
    console.log("You type wrong number");
}
