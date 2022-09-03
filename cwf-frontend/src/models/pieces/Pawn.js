import Piece from "./Piece";

export default class Pawn extends Piece {
    constructor(color) {
        super(color);
        this.hasMoved = false;
    }

    getInitials() {
        return this.color + 'P';
    }
}