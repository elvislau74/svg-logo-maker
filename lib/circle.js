// Assign module exports needed for the following constructor from it's parent, the Shape constructor
const Shape = require('./shape');

// Extends the values from the Shape constructor
class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    // Renders the SVG code of a Circle with data input by the user
    render() {
        const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;

        return svgCode;
    }
}

// Exports Circle constructor to be used in it's test file
module.exports = Circle;