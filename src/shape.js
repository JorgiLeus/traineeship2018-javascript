// DTODO 1 create a Shape class (export default)
export default class Shape{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
    }

    move(x, y){
        this.x = x;
        this.y = y;
    }

    get getColor(){return this.color;}

    set changeColor(color){
        this.color = color;
    }
}

// DTODO 2 add properties 'color', 'x' and 'y' to the shape class via the constructor

// DTODO 3 create a new file (src/rectangle.js) and create a Rectangle class

// DTODO 4 make the Rectangle class and extend from Shape

// DTODO 5 add following function to Shape:
/*
    void move(x, y) change x and y position of the shape
    string getColor() get the color and use the new Getter feature of ES6
    void changeColor set the color and use the new Setter feature of ES6
 */
// DTODO 6 write tests (Shape and Rectangle) for the methods you just wrote and validate the new position

// DTODO 7 add properties 'width' and 'height' to the Rectangle class

// DTODO 8 add following functions to Rectangle:
/*
    void rotate90Degrees() rotate the Rectangle 90°
    void enlarge(additionalWidth, additionalHeight) enlarge the Rectangle
    void shrink(minusWidth minusHeight) shrink the Rectangle
    boolean isSquare() tells if the rectangle is a square
 */
// TODO 9 think of 3 other types of shapes and extend from the correct super class

// TODO 10 think of new methods you can add to the shapes we created (at least 2)