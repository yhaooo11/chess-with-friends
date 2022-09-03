import numToLetterMap from "./enums/Algebraic";

export default class Tile {
    constructor(row, column, piece=null) {
        this.piece = piece;
        this.row = row;
        this.column = column;
    }
    // converts (x,y) to algebraic notation (eg. a1) 
    toChessCoords() {

    }
}