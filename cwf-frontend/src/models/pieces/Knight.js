import Piece from "./Piece";

export default class Knight extends Piece {
    getInitials() {
        return this.color + 'N';
    }
}