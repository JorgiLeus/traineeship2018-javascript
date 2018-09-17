import Shape from '../src/shape';

export default class Rectangle extends Shape{
    constructor(color, x, y, width, height){
        super(color, x, y);
        this.width = width;
        this.height = height;
    }

    rotate90Degrees(){
        let temp = this.height;
        this.height = this.width;
        this.width = temp;
    }

    enlarge(additionalWidth, additionalHeight){
        this.width += additionalWidth;
        this.height += additionalHeight;
    }

    shrink(minusWidth, minusHeight){
        this.width -= minusWidth;
        this.height -= minusHeight;
    }

    isSquare(){
        if(this.height === this.width) return true;
        else return false;
    }
}