class Shape {
    constructor(text, textColor, shape, shapeColor) {
        if (text.length > 3 || text.length < 3) {
            throw new Error('Text must be no less or more than 3 characters long.');
        };
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    printLogo() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = Shape;