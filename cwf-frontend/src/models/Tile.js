export default class Tile {
    constructor(row, column, piece=null) {
        this.row = row;
        this.column = column;
        this.piece = piece;
    }

    // converts row, col to algebraic notation (eg. a1) 
    toChessCoords() {
        const letterMap = {
            0: 'a',
            1: 'b',
            2: 'c',
            3: 'd',
            4: 'e',
            5: 'f',
            6: 'g',
            7: 'h'
        };

        return letterMap[this.column] + (8 - this.row);
    }

    /**
     * Sets piece in this tile to null
     */
    removePiece() {
        this.piece = null;
    }

    /**
     * Set this tile's piece
     * 
     * @param {Piece} piece - piece to added to this tile
     */
    addPiece(piece) {
        this.piece = piece;
    }
}