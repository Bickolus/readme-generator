// Import fs library so we have the ability to read/write files.
const fs = require("fs");
// Import inquirer library
const inquirer = require("inquirer");

let generateMD = () => {
// Important questions the program will be asking:
  inquirer
    .prompt([
      {
        type: "input",
        message: "Give a title for your project:",
        name: "title",
        validate: nameInput => {
          nameInput
          ? true
          : console.log("Please do not leave this blank.");
            false;
        }
      },
      {
        type: "input",
        message: "Provide a description for your project:",
        name: "description"
      },
      {
        type: "input",
        message: "Provide any installation instructions (example: 'type npm install in the console to install dependancies'):",
        name: "instructions",
      },
      {
        type: "input",
        message: "Write what the user needs to know about using the repository:",
        name: "usage"
      },
      {
        type: "list",
        message: "Choose which license your project will use:",
        name: "license",
        choices: [
          "APACHE 2.0", 
          "Boost Software License 1.0", 
          "BSD 3-Clause", 
          "Creative Commons A4.0", 
          "GNU GPL 3.0", 
          "MIT", 
          "MPL 2.0", 
          "No License"
        ]
      },
      {
        type: "input",
        message: "Write what the user needs to know about contributing to the repository:",
        name: "contributing"
      },
      {
        type: "input",
        message: "Write any tests that the user could do for the program:",
        name: "test"
      },
      {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github"
      },
      {
        type: "input",
        message: "Enter your email address:",
        name: "email"
      }
    ])
    .then((answer) =>
      fs.writeFile("README.md", readMeContent(answer), (err) =>
      err ? console.error(err) : console.log("Success! README.md created.")
      )
    );
}

let getLicenseIcon = (license) => {
  switch (license) {
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software License 1.0":
      return ""
  }
}

let readMeContent = (data) => {
return `# ${data.title}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.instructions}

## Usage

${data.usage}

## License

${
  data.license !== "No License"
  ? `Licensed under the ${data.license} license.`
  : "This project is not under any license."
}

## Contributing

${data.contributing}

## Tests 

${data.tests}

## Questions

My GitHub Page: [${data.github}](https://github.com/${data.github}.org)

If you have any questions, please contact me at ${data.email}.`};

generateMD();