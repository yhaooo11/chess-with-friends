import Piece from "./Piece";

/**
 * The Bishop piece in Chess
 * 
 * @classdesc {Object} Bishop extends Piece
 * @property {Color} color - Color this piece belongs to
 */
export default class Bishop extends Piece {

    /**
     * Get the encoding corresponding to this piece color and name
     * 
     * @returns {string} the piece initials
     * 
     * @example "bB" - Black Bishop
     * @example "wB" - White Bishop
     */
    getInitials() {
        return this.color + 'B';
    }

    /**
     * Determine all board positions this piece can move to without violating the following chess rules: 1 - can only move diagonally. 
     * 2 - cannot jump over intervening pieces.
     * 
     * @param {Board} board - The board this piece is on
     * @param {Tile} currentTile - The tile this piece is on
     * @returns {int[][]} 2D array of board positions [[row, col], [row, col], ...] (can be empty)
     * 
     * @example "[[0, 1], [1, 0], [1, 1]]"
     */
    getValidMoves(board, currentTile) {

        const moves = {
            movesLeftUp: [[-1, -1], [-2,-2], [-3, -3], [-4, -4]],
            movesRightUp: [[-1, 1], [-2, 2], [-3, 3], [-4, 4]],
            movesLeftDown: [[1, -1], [2, -2], [3, -3], [4, -4]],
            movesRightDown: [[1, 1], [2, 2], [3, 3], [4, 4]]
        }

        let validMoves = []

        for (const moveList in moves) {

            // add currentTile row, column to moves and filter out of bounds moves
            const filteredMoves = moves[moveList].map(move => [currentTile.row + move[0], currentTile.column + move[1]]).filter(move => 
                this.isInBounds(move))

            // slice moves so that goes only until nearest opposite color piece or one before same color piece
            for (var i = 0; i < filteredMoves.length; i++) {
                const [row, column] = filteredMoves[i];

                if (board.getPiece(row, column)) {
                    if (board.getPiece(row, column).color === this.color) {
                        validMoves = validMoves.concat(filteredMoves.slice(0, i));
                    } else {
                        validMoves = validMoves.concat(filteredMoves.slice(0, i + 1));
                    }
                    
                    break;
                }
            }
        }

        return validMoves;
    }
}