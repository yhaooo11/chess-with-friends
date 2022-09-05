import Piece from "./Piece";

export default class Bishop extends Piece {
    getInitials() {
        return this.color + 'B';
    }
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