const Shape = require('./shape');

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    printLogo() {
        const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>
        </svg>`;

        return svgCode;
    }
}

module.exports = Square;