export default class Piece {
    constructor (color) {
        this.color = color;
        if (this.constructor == Piece) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    // returns array of positions of all valid moves in algebraic notation (eg. ['a1', 'b2', ...])
    validMoves() {
        throw new Error("Method validMove() must be implemented.");
    }
    // returns initial of piece (eg. white king = wK)
    getInitials() {

    }
}