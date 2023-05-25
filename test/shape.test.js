// Assign module export needed for the following tests to a constant value
const Shape = require('../lib/shape');

// Tests for the Shape constructor
describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape('BEE');
            
            expect(shape).toBeInstanceOf(Shape);
        })
    })
    
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'BEE';
            const shape = new Shape(text);

            expect(shape.text).toBe(text);
        })
    })

    describe('Capitalize text', () => {
        it('should capitalize text properly', () => {
            const text = 'bee';
            const shape = new Shape(text);

            expect(shape.text).toBe(text.toUpperCase());
        })
    })

    describe('Invalid text input', () => {
        it('should throw an error when text is less than or greater than 3 characters', () => {
            const t1 = () => {
                new Shape('hi');
            };

            const t2 = () => {
                new Shape('bobby');
            };

            const expectedErr = 'Text must be no less or more than 3 characters long.'

            expect(t1).toThrow(Error);
            expect(t1).toThrow(expectedErr);
            expect(t2).toThrow(Error);
            expect(t2).toThrow(expectedErr);
        })
    })

    describe('Initialize textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'black';
            const shape = new Shape('BEE', textColor);

            expect(shape.textColor).toBe(textColor);
        })
    })

    describe('Initialize shape', () => {
        it('should set shape properly', () => {
            const exampleShape = 'Circle';
            const shape = new Shape(
                'BEE', 
                'black', 
                exampleShape
            );

            expect(shape.shape).toBe(exampleShape);
        })
    })

    describe('Initialize shapeColor', () => {
        it('should set text properly', () => {
            const shapeColor = "yellow";
            const shape = new Shape(
                'BEE', 
                'black', 
                'Circle', 
                shapeColor
            );

            expect(shape.shapeColor).toBe(shapeColor);
        })
    })

    describe('render() method', () => {
        it('should print SVG code with data', () => {
            const shape = new Shape(
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

            expect(shape.render()).toBe(svgCode);
        })
    })
})