const inquirer = require("inquirer");
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project titled?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description."
    },
    {
        type: "input",
        name: "installation",
        message: "How to install this project?",
    },
    {
        type: "input",
        name: "useage",
        message: "What is this used for?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who all contributed to this project?",
    },
    {
        type: "input",
        name: "testInstruction",
        message: "What are test instructions?",
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub username for questions?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email for Questions?"
    },
    {
        type: "list",
        name: "license",
        message: "Using the arrow keys, please select a license to include:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Mozilla Public License 2.0",
        ]
    },
])
};

