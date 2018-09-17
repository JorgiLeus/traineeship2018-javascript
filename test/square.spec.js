import Square from '../src/square';

describe('test Square class', () => {

    let line = 5;

    let square;

    beforeEach(function(){
        square = new Square("blue", 5, 5, line);
    });


    it('test square shape', () => {
        square.move(4, 6);

        expect(square.x).toBe(4);
        expect(square.y).toBe(6);

        square.changeColor = 'red';

        expect(square.getColor).toBe("red");

        expect(square.getLine).toBe(5);

        square.setLine = 6;

        expect(square.getLine).toBe(6);
    });

    it('should getArea of shape', () => {
        expect(square.getArea()).toBe(line*line);
        //console.log("Length: " + square.getLine, "Area: " + square.getArea());
    });

    it('should duplicate and double line length', () => {
        let newSquare = square.duplicateAndIncreaseLine();

        expect(newSquare.getLine).toBe(line * 2);
    });
});