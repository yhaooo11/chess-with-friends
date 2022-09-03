import Piece from "./Piece";

export default class Bishop extends Piece {
    getInitials() {
        return this.color + 'B';
    }
}