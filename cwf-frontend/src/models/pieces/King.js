import Piece from "./Piece"

/**
 * The King piece in Chess
 * 
 * @classdesc {Object} King extends Piece
 * @property {Color} color - Color this piece belongs to
 * @property {boolean} canCastle - true if the King hasn't moved yet
 */
export default class King extends Piece {

    /**
     * Construct a King with given color and can castle
     * 
     * @param {Color} color - Color this piece belongs to
     */
    constructor(color) {
        super(color);
        this.canCastle = true;
    }

    /**
     * Get the encoding corresponding to this piece color and name
     * 
     * @returns {string} the piece initials
     * 
     * @example "bK" - Black King
     * @example "wK" - White King
     */
    getInitials() {
        return this.color + 'K';
    }

    /**
     * Determine all board positions this piece can move to without violating the following chess rules: 1 - can only move one space
     * horizontally, vertically, or diagonally (exception - can move 2 if castling) 2 - cannot move into space occupied by same color. 3 - cannot be in check after move. 
     * 4 - can castle only if it has not moved, the rook to be castled with has not moved, and the king will not have to move past a square under attack or occupied
     * 
     * @param {Board} board - The board this piece is on
     * @param {Tile} currentTile - The tile this piece is on
     * @returns {int[][]|null} 2D array of board positions [[row, col], [row, col], ...] or null if no valid moves
     * 
     * @example "[[0, 1], [1, 0], [1, 1]]"
     */
    getValidMoves(board, currentTile) {
        const moves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [0, -1], [-1, -1], [-1, 0]];
        const validMoves = moves.map(move => 
            [currentTile.row + move[0], currentTile.column + move[1]]).filter(move => 
                this.isInBounds(move)).filter(move => {
                    const algebraicMove = this.toChessCoords(move);
                    return board.tiles[algebraicMove].piece === null || board.tiles[algebraicMove].piece.color !== this.color;
        });

        return validMoves;
    }

    /**
     * Return a 2D boolean array corresponding to the board representing true for positions not under enemy attack
     * 
     * @param {Board} board  - The board this piece is on
     * @param {Color} playerColor - The color/player this piece belongs to
     * @returns {boolean[][]} indicies that are true are not under attack by any enemy pieces
     * 
     * @example
     * [[f, f, f, f, f, f, f, f],
     *  [f, f, t, f, f, f, t, f],
     *  [f, f, f, f, f, f, f, f],
     *  [t, t, t, t, t, t, t, t],
     *  [f, t, f, t, f, t, f, f],
     *  [f, f, f, f, f, f, f, f],
     *  [t, t, f, f, f, t, f, f],
     *  [f, f, t, f, t, f, f, f]]
     */
    getSafePositions(board, playerColor) {
        for (let r = 0; r < board.SIZE; r++) {
            for (let c = 0; c < board.SIZE; c++) {
                let piece = board.getPiece(r, c);

            }
        }
    }
}