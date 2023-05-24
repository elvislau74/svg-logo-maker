const Shape = require('./shape');

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <polygon points="150, 10 270, 155 40, 155" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;

        return svgCode;
    }
}

module.exports = Triangle;