import Rectangle from '../src/rectangle';

describe('testing rectangle class', () => {

    const width = 20;
    const height = 10;

    let rectangle;

    beforeEach(function() {
        rectangle = new Rectangle("red", 5, 5, width ,height);
    });

    it('test move()', () => {
        rectangle.move(4, 6);

        expect(rectangle.x).toBe(4);
        expect(rectangle.y).toBe(6);
    });

    it('testing getColor() and changeColor()', () => {
        rectangle.changeColor = 'blue';
        expect(rectangle.getColor).toBe("blue");
    });

    it('rotate90Degrees should switch height and width', () => {
        rectangle.rotate90Degrees();

        expect(rectangle.width).toBe(height);
        expect(rectangle.height).toBe(width);
    });

    it('enlarge should add numbers to height and width', () => {
        rectangle.enlarge(5,5);

        expect(rectangle.width).toBe(25);
        expect(rectangle.height).toBe(15);
    });

    it('shrink should shrink the height and width', () => {
        rectangle.shrink(5,5);

        expect(rectangle.width).toBe(15);
        expect(rectangle.height).toBe(5);
    });

    it('isSquare should check if width is equal to height', () => {
        expect(rectangle.isSquare()).toBe(false);

        let squareRectangle = new Rectangle("red", 5, 5, 10, 10);
        expect(squareRectangle.isSquare()).toBe(true);
    });
});