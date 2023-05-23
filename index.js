const inquirer = require('inquirer');
const generateSVG = require('./lib/shape');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your SVG logo (limited to 3 characters)?',
      },
      {
        type: 'input',
        name: 'text-color',
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
        name: 'shape-color',
        message: 'What color would you like your shape to be (color keyword or hexadecimal number are both acceptable)?',
      },
];