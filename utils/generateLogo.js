const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

function generateSVG(data) {
    const {text, textcolor, shape, shapecolor} = data;

    if (shape === 'Circle') {
        const circle = new Circle(text.toUpperCase(), textcolor, shape, shapecolor);
        return circle.printLogo();
    }
    else if (shape === 'Triangle') {
        const triangle = new Triangle(text.toUpperCase(), textcolor, shape, shapecolor);
        return triangle.printLogo();
    }
    else {
        const square = new Square(text.toUpperCase(), textcolor, shape, shapecolor);
        return square.printLogo();
    }
};

module.exports = {
    generateSVG
  };