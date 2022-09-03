import Piece from "./Piece";

export default class Rook extends Piece {
    getInitials() {
        return this.color + 'R';
    }
}