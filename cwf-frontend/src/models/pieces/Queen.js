import Piece from "./Piece";

export default class Queen extends Piece {
    getInitials() {
        return this.color + 'Q';
    }
}