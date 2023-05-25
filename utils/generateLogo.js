// Assign module exports needed for the following function to constant values
const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

// This function generates the SVG code to be printed onto the file
// using data pulled from inquirer to be entered into each shape constructor,
// utilizing their render modules to return the svg shape code
function generateSVG(data) {
    // Deconstruct data object into constant values for easier accessibility
    const {text, textcolor, shape, shapecolor} = data;

    // if statement to return the shape entered by the user
    if (shape === 'Circle') {
        const circle = new Circle(text, textcolor, shape, shapecolor);
        return circle.render();
    }
    else if (shape === 'Triangle') {
        const triangle = new Triangle(text, textcolor, shape, shapecolor);
        return triangle.render();
    }
    else {
        const square = new Square(text, textcolor, shape, shapecolor);
        return square.render();
    }
};

// Export the generateSVG function to be used in index.js 
module.exports = {
    generateSVG
  };