const Shape = require('./shape');

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
        this.text = text.toUpperCase();
    }
    printLogo() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>
        </svg>
        `;
    }
}

module.exports = Circle;