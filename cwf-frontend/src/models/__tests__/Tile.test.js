import Tile from '../Tile';
import Pawn from '../pieces/Pawn';
import Queen from "../pieces/Queen";
import { Color } from '../enums/Color';

test("Constructor no piece", () => {
    let tile = new Tile(1, 2);
    expect(tile.row).toBe(1);
    expect(tile.column).toBe(2);
    expect(tile.piece).toBe(null);
    expect(tile.toChessCoords()).toBe("c7");
});

test("Constructor pawn", () => {
    let tile = new Tile(2, 1, new Pawn(Color.WHITE));
    expect(tile.row).toBe(2);
    expect(tile.column).toBe(1);
    expect(tile.piece).toBeInstanceOf(Pawn);
    expect(tile.toChessCoords()).toBe("b6");
});

test("Remove pawn", () => {
    let tile = new Tile(2, 1, new Pawn(Color.WHITE));
    expect(tile.row).toBe(2);
    expect(tile.column).toBe(1);
    expect(tile.piece).toBeInstanceOf(Pawn);
    tile.removePiece();
    expect(tile.piece).toBe(null);
});

test("Add Queen", () => {
    let tile = new Tile(2, 1, new Pawn(Color.WHITE));
    expect(tile.row).toBe(2);
    expect(tile.column).toBe(1);
    expect(tile.piece).toBeInstanceOf(Pawn);
    tile.addPiece(new Queen(Color.WHITE));
    expect(tile.piece).toBeInstanceOf(Queen);
});