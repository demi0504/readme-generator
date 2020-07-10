const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What is needed to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How can your project be used?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license option below:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Please include any contribution guidelines you have here:"
    },
    {
        type: "input",
        name: "tests",
        message: "Explain how to run tests for the project."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "badges",
        message: "Please include any links here to badges you would like to include in your README:"
    }
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README success!");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);

    })
}

// function call to initialize program
init();
