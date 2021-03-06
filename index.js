// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Constant variable to require the JS Generate Markdown file
const generateMarkdown = require("./JAVASCRIPT/generateMarkdown");

// Array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
            name: 'credits'
        },
        {
            type: 'list',
            message: 'Choose a license',
            name: 'license',
            choices: ["MIT License", "IBM Public License Version 1.0", "The Apache License", "Creative Commons - CC0", "Eclipse Public License (EPL)"],
        },
        {
            type: 'input',
            message: 'If your project has a lot of features, list them here.',
            name: 'features'
        },
        {
            type: 'input',
            message: 'Please enter guidelines for contributing to this project.',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
            name: 'tests'
        },
    ])
}

// Function that initializes app
const init = () => {
    promptUser()
    // Used writeFileSync method to use promises instead of a callback function
        .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to README.md!'))
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();