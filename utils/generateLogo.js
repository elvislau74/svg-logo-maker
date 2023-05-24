const Circle = require('../lib/circle');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');

function generateSVG(data) {
    const {text, textcolor, shape, shapecolor} = data;

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

module.exports = {
    generateSVG
  };