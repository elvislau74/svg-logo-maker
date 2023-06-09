// Assign packages and module exports needed for this application to constant values
const inquirer = require('inquirer');
const generateSVG = require('./utils/generateLogo');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your SVG logo (limited to 3 characters)?',
      },
      {
        type: 'input',
        name: 'textcolor',
        message: 'What color would you like your text to be (color keyword or hexadecimal number are both acceptable)?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like for your SVG logo?',
        choices: [
          "Circle",
          "Triangle",
          "Square",
        ],
      },
      {
        type: 'input',
        name: 'shapecolor',
        message: 'What color would you like your shape to be (color keyword or hexadecimal number are both acceptable)?',
      },
];

// This function writes a SVG file
function writeToFile(fileName, data) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// This function initializes the app
// Uses inquirer to prompt the user with questions 
// Pulls answers to be used to create and print to svg file
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(answers.shape, generateSVG.generateSVG(answers));
    });
}

// Function call to initialize app
init();