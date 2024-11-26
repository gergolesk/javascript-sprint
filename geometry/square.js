import { Rectangle } from './rectangle.js';

export class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.side;
    }
}

const square = new Square(4);

module.exports = { Square, square };