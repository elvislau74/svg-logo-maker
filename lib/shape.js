// Parent 'Shape' class constructor with preset values and methods
// Will be inherited by subsequent child file constructors
class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
        
        // Throws an error if text enter by user is more than 4 characters
        if (text.length > 3) {
            throw new Error('Text must be no more than 3 characters long.');
        };
    }

    // 
    render() {
        
        const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;

        return svgCode;
    }
}

// Exports Shape constructor to be used in it's test file as well as in the child constructor files 
module.exports = Shape;