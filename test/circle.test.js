// Assign module export needed for the following tests to a constant value
const Circle = require('../lib/circle');

// Tests for the circle constructor
describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle('BEE');
            
            expect(circle).toBeInstanceOf(Circle);
        })
    })
    
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'BEE';
            const circle = new Circle(text);

            expect(circle.text).toBe(text);
        })
    })

    describe('Capitalize text', () => {
        it('should capitalize text properly', () => {
            const text = 'bee';
            const circle = new Circle(text);

            expect(circle.text).toBe(text.toUpperCase());
        })
    })

    describe('Invalid text input', () => {
        it('should throw an error when text is more than 3 characters', () => {
            const t = () => {
                new Circle('bobby');
            };

            const expectedErr = 'Text must be no more than 3 characters long.'

            expect(t).toThrow(Error);
            expect(t).toThrow(expectedErr);
        })
    })

    describe('Initialize textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'black';
            const circle = new Circle('BEE', textColor);

            expect(circle.textColor).toBe(textColor);
        })
    })

    describe('Initialize shape', () => {
        it('should set shape properly', () => {
            const exampleShape = 'Circle';
            const circle = new Circle(
                'BEE', 
                'black', 
                exampleShape
            );

            expect(circle.shape).toBe(exampleShape);
        })
    })

    describe('Initialize shapeColor', () => {
        it('should set text properly', () => {
            const shapeColor = "yellow";
            const circle = new Circle(
                'BEE', 
                'black', 
                'Circle', 
                shapeColor
            );

            expect(circle.shapeColor).toBe(shapeColor);
        })
    })

    describe('render() method', () => {
        it('should print SVG code with data', () => {
            const circle = new Circle(
                'BEE', 
                'black', 
                'Circle', 
                'yellow'
            );

            const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BEE</text>
        </svg>`;

            expect(circle.render()).toBe(svgCode);
        })
    })
})