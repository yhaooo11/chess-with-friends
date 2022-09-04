export default class Piece {
    constructor (color) {
        this.color = color;
        if (this.constructor == Piece) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    // returns array of positions of all valid moves in algebraic notation (eg. ['a1', 'b2', ...])
    getValidMoves() {
        throw new Error("Method validMove() must be implemented.");
    }
    // returns initial of piece (eg. white king = wK)
    getInitials() {
        throw new Error("Method getInitials() must be implemented.");
    }
    isInBounds(position) {
        return position[0] <= 7 && position[0] >= 0 && position[1] <= 7 && position[1] >= 0;
    }
}