/**
 * A Tile on the Chess Board
 * 
 * @classdesc {Object} Tile
 * @property {int} row - row this tile is on
 * @property {int} column - column this tile is on
 * @property {Piece|null} piece - the chess piece on this tile
 */
export default class Tile {
    /**
     * Construct tile at given position with optional starting piece
     * 
     * @param {int} row - row this tile is on
     * @param {int} column - column this tile is on
     * @param {Piece} piece - the chess piece on this tile
     */
    constructor(row, column, piece = null) {
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
     * 
     * @returns {Piece} piece on this tile
     */
    getPiece() {
        return this.piece;
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