// Assign module export needed for the following tests to a constant value
const Square = require('../lib/square');

// Tests for the Square constructor
describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square('BEE');
            
            expect(square).toBeInstanceOf(Square);
        })
    })
    
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'BEE';
            const square = new Square(text);

            expect(square.text).toBe(text);
        })
    })

    describe('Capitalize text', () => {
        it('should capitalize text properly', () => {
            const text = 'bee';
            const square = new Square(text);

            expect(square.text).toBe(text.toUpperCase());
        })
    })

    describe('Invalid text input', () => {
        it('should throw an error when text is less than or greater than 3 characters', () => {
            const t1 = () => {
                new Square('hi');
            };

            const t2 = () => {
                new Square('bobby');
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
            const square = new Square('BEE', textColor);

            expect(square.textColor).toBe(textColor);
        })
    })

    describe('Initialize shape', () => {
        it('should set shape properly', () => {
            const exampleShape = 'Square';
            const square = new Square(
                'BEE', 
                'black', 
                exampleShape
            );

            expect(square.shape).toBe(exampleShape);
        })
    })

    describe('Initialize shapeColor', () => {
        it('should set text properly', () => {
            const shapeColor = "yellow";
            const square = new Square(
                'BEE', 
                'black', 
                'Square', 
                shapeColor
            );

            expect(square.shapeColor).toBe(shapeColor);
        })
    })

    describe('render() method', () => {
        it('should print SVG code with data', () => {
            const square = new Square(
                'BEE', 
                'black', 
                'Square', 
                'yellow'
            );

            const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <rect x="75" y="30" width="150" height="150" fill="yellow"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BEE</text>
        </svg>`;

            expect(square.render()).toBe(svgCode);
        })
    })
})