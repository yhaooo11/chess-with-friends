import Piece from "./Piece";
import numToLetterMap from "../enums/Algebraic";

export default class Knight extends Piece {
    getInitials() {
        return this.color + 'N';
    }
    getValidMoves(board, currentTile) {
        const moves = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
        const validMoves = moves.map(move => [currentTile.row + move[0], currentTile.column + move[1]]).filter(move => this.isInBounds(move)).filter(move => {
            const algebraicPos = this.toChessCoords(move);
            console.log(algebraicPos)
            if (board.tiles[algebraicPos]) {
                return board.tiles[algebraicPos].piece === null || board.tiles[algebraicPos].piece.color !== this.color;
            } else {
                return false
            }
        });
        console.log(validMoves)
        return validMoves;
    }
    toChessCoords(move) {
        const column = 1 + move[1]
        return numToLetterMap.get(move[0]) + column.toString();
    }
}