import Shape from '../src/shape';

export default class Square extends Shape{
    constructor(color, x, y, line){
        super(color, x, y);
        this.line = line;
    }

    getArea(){
        return this.line*this.line;
    }

    duplicateAndIncreaseLine(){
        let square = new Square(this.color, this.x, this.y, this.line*2);
        return square;
    }

    get getLine(){
        return this.line;
    }

    set setLine(line){
        this.line = line;
    }
}