import Piece from "./Piece";

export default class Knight extends Piece {
    getInitials() {
        return this.color + 'N';
    }

    getValidMoves(board, currentTile) {
        const moves = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
        const validMoves = moves.map(move => 
            [currentTile.row + move[0], currentTile.column + move[1]]).filter(move => 
                this.isInBounds(move)).filter(move => {
                    const algebraicMove = this.toChessCoords(move);
                    return board.tiles[algebraicMove].piece === null || board.tiles[algebraicMove].piece.color !== this.color;
        });

        return validMoves;
    }
}