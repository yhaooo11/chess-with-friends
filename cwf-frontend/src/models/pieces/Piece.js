export default class Piece {
    constructor (color) {
        this.color = color;
        if (this.constructor == Piece) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    /**
     * Determine all board positions this piece can move to without violating any chess rules
     * 
     * @param {Board} board - The board this piece is on
     * @param {Tile} currentTile - The tile this piece is on
     * @returns {int[][]} 2D array of board positions [[row, col], [row, col], ...] (can be empty)
     * 
     * @example "[[3, 3], [3, 1], [2, 2]]"
     */
    getValidMoves(board, currentTile) {
        throw new Error("Method getValidMove() must be implemented.");
    }

    // returns initial of piece (eg. white king = wK)
    getInitials() {
        throw new Error("Method getInitials() must be implemented.");
    }

    isInBounds(position) {
        return position[0] <= 7 && position[0] >= 0 && position[1] <= 7 && position[1] >= 0;
    }

    // takes in array and converts to algebraic notation
    toChessCoords(move) {
        const letterMap = {
            0: 'a',
            1: 'b',
            2: 'c',
            3: 'd',
            4: 'e',
            5: 'f',
            6: 'g',
            7: 'h'
        }
        return letterMap[move[1]] + (8 - move[0]);
    }
}