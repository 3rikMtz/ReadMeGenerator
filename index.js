const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enlist steps for installation',
        name: 'installation',
    },
    // add all other required questions similarly
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README file has been generated!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("dist/README.md", generateMarkdown(data));
        });
}

// Call to initialize app
init();
