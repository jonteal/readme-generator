// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, usage, contribution, test, license, username, email, image }) =>
`
#${title}

## ${description}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What did you learn?
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    ```md
    ![alt text](assets/images/screenshot.png)
    ```
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
# Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.


# ${response.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${response.username}
##username:

    ${response.description}
##description:

    ${response.installation}
##installation:

    ${response.usage}
##usage:

    ${response.licenses}
##licenses:

    ${response.contribution}
##contribution:

    ${response.test}
##test:

    ${response.email}
##email:

    ${response.profile}
##profile:
`; 


// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the project title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Provide a short description explaining the what, why, and how of your project. What was your motivation? Why did you build this project? What problem does it solve? - What did you learn?`,
                name: 'description'
            },
            {
                type: 'input',
                message: 'Installation instructions',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Usage Information',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Contribution Guidelines',
                name: 'contribution'
            },
            {
                type: 'input',
                message: 'Test Instructions ',
                name: 'test'
            },
            {
                type: 'input',
                message: 'Choose a license',
                name: 'license'
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
                message: 'Enter image URL',
                name: 'image'
            },
        ])
]
.then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
        );
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
