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
                    const row = move[0];
                    const column = move[1];
                    // empty square or not same color
                    return !board.isTileOccupied(row, column) || board.getPiece(row, column).color !== this.color;
        });
        
        return validMoves;
    }
}