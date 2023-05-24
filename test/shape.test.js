const Shape = require('../lib/shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of Shape class', () => {
            const shape = new Shape();
            
            expect(shape).toBeInstanceOf(Shape);
        })
    })
})