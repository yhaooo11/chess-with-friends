
export default class Tile {
    constructor(row, column, piece=null) {
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
        }

        return letterMap[this.column] + (8 - this.row);
    }
}