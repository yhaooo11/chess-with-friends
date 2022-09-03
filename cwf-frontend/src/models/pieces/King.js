import Piece from "./Piece"

export default class King extends Piece {
    constructor(color) {
        super(color);
        this.castled = false;
    }
    getInitials() {
        return this.color + 'K';
    }
}