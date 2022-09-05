import Piece from "./Piece"

export default class King extends Piece {
    constructor(color) {
        super(color);
        this.castled = false;
    }

    getInitials() {
        return this.color + 'K';
    }

    getValidMoves(board, currentTile) {
        const moves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [0, -1], [-1, -1], [-1, 0]];
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