import Shape from '../src/shape';

describe('testing class shape', () => {
    let shape = new Shape("blue", 5, 5);

    it('testing move()', () => {
        shape.move(4, 6);

        expect(shape.x).toBe(4);
        expect(shape.y).toBe(6);
    });

    it('testing getColor() and changeColor()', () => {
        shape.changeColor = 'red';
        expect(shape.getColor).toBe("red");
    });
});