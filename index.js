// Import fs library so we have the ability to read/write files.
const fs = require("fs");
// Import inquirer library
const inquirer = require("inquirer");

// Important questions the program will be asking:
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your prefered method of communication?',
      name: 'communication',
    },
  ])
  .then((response) =>
    fs.writeFile('log.txt', `${response.username}\n ${response.languages}\n ${response.communication}`, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
  );