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
                    const algebraicMove = this.toChessCoords(move);
                    return board.tiles[algebraicMove].piece === null || board.tiles[algebraicMove].piece.color !== this.color;
        });

        return validMoves;
    }
}