// Assign module export needed for the following tests to a constant value
const Triangle = require('../lib/triangle');

// Tests for the Triangle constructor
describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle('BEE');
            
            expect(triangle).toBeInstanceOf(Triangle);
        })
    })
    
    describe('Initialize text', () => {
        it('should set text properly', () => {
            const text = 'BEE';
            const triangle = new Triangle(text);

            expect(triangle.text).toBe(text);
        })
    })

    describe('Capitalize text', () => {
        it('should capitalize text properly', () => {
            const text = 'bee';
            const triangle = new Triangle(text);

            expect(triangle.text).toBe(text.toUpperCase());
        })
    })

    describe('Invalid text input', () => {
        it('should throw an error when text is more than 3 characters', () => {
            const t = () => {
                new Triangle('bobby');
            };

            const expectedErr = 'Text must be no more than 3 characters long.'

            expect(t).toThrow(Error);
            expect(t).toThrow(expectedErr);
        })
    })

    describe('Initialize textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'black';
            const triangle = new Triangle('BEE', textColor);

            expect(triangle.textColor).toBe(textColor);
        })
    })

    describe('Initialize shape', () => {
        it('should set shape properly', () => {
            const exampleShape = 'Triangle';
            const triangle = new Triangle(
                'BEE', 
                'black', 
                exampleShape
            );

            expect(triangle.shape).toBe(exampleShape);
        })
    })

    describe('Initialize shapeColor', () => {
        it('should set text properly', () => {
            const shapeColor = "yellow";
            const triangle = new Triangle(
                'BEE', 
                'black', 
                'Triangle', 
                shapeColor
            );

            expect(triangle.shapeColor).toBe(shapeColor);
        })
    })

    describe('render() method', () => {
        it('should print SVG code with data', () => {
            const triangle = new Triangle(
                'BEE', 
                'black', 
                'Triangle', 
                'yellow'
            );

            const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <polygon points="150, 10 270, 155 40, 155" fill="yellow"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BEE</text>
        </svg>`;

            expect(triangle.render()).toBe(svgCode);
        })
    })
})