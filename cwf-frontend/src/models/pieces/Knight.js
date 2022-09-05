import Piece from "./Piece";

/**
 * The Knight piece in Chess
 * 
 * @classdesc {Object} Knight extends Piece
 * @property {Color} color - Color this piece belongs to
 */
export default class Knight extends Piece {

    /**
     * Get the encoding corresponding to this piece color and name
     * 
     * @returns {string} the piece initials
     * 
     * @example "bN" - Black Knight
     * @example "wN" - White Knight
     */
    getInitials() {
        return this.color + 'N';
    }

    /**
     * Determine all board positions this piece can move to without violating the following chess rules: 1 - it may move 
     * two squares vertically and one square horizontally or two squares horizontally and one 
     * square vertically, jumping over other piece
     * 
     * @param {Board} board - The board this piece is on
     * @param {Tile} currentTile - The tile this piece is on
     * @returns {int[][]} 2D array of board positions [[row, col], [row, col], ...] (can be empty)
     * 
     * @example "[[0, 1], [1, 0], [1, 1]]"
     */
    getValidMoves(board, currentTile) {
        const moves = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
        const validMoves = moves.map(move => 
            [currentTile.row + move[0], currentTile.column + move[1]]).filter(move => 
                this.isInBounds(move)).filter(move => {
                    const [row, column] = move;
                    // empty square or not same color
                    return !board.isTileOccupied(row, column) || board.getPiece(row, column).color !== this.color;
        });
        
        return validMoves;
    }
}