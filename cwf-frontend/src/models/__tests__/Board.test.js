import Board from "../Board";
import { NoPieceThereException } from "../exceptions/NoPieceThereException";
import { PositionOutOfBoundsException } from "../exceptions/PositionOutOfBoundsException";
import Pawn from "../pieces/Pawn";
import Rook from "../pieces/Rook";

test("Constructor Default Board", () => {
    let board = new Board();
    expect(board.tiles.length).toBe(8);
    expect(board.tiles[0].length).toBe(8);
});

test("getPiece Rook", () => {
    let board = new Board();
    expect(board.getPiece(0, 0)).toBeInstanceOf(Rook);
});

test("getPiece null", () => {
    let board = new Board();
    expect(board.getPiece(4, 1)).toBe(null);
});
test("getPiece Invalid Position", () => {
    let board = new Board();
    expect((() => {board.getPiece(-1, 0)})).toThrow(PositionOutOfBoundsException);
    expect((() => {board.getPiece(0, -1)})).toThrow(PositionOutOfBoundsException);
    expect((() => {board.getPiece(board.BOARD_MAX_INDEX + 1, 0)})).toThrow(PositionOutOfBoundsException);
    expect((() => {board.getPiece(0, board.BOARD_MAX_INDEX + 1)})).toThrow(PositionOutOfBoundsException);
});

test("isTiledOccupied true", () => {
    let board = new Board();
    expect(board.isTileOccupied(0, 1)).toBe(true);
});

test("isTiledOccupied false", () => {
    let board = new Board();
    expect(board.isTileOccupied(4, 1)).toBe(false);
});

test("Move Pawn to Empty Square", () => {
    let board = new Board();
    expect(board.getPiece(6, 2)).toBeInstanceOf(Pawn);
    expect(board.getPiece(5, 2)).toBe(null);
    board.movePiece(6, 2, 5, 2);
    expect(board.getPiece(6, 2)).toBe(null);
    expect(board.getPiece(5, 2)).toBeInstanceOf(Pawn);
});

test("Move Piece to Invalid Row", () => {
    let board = new Board();
    expect(() => {board.movePiece(6, 2, -1, 2)}).toThrow(PositionOutOfBoundsException);
    expect(() => {board.movePiece(6, 2, board.BOARD_MAX_INDEX + 1, 2)}).toThrow(PositionOutOfBoundsException);
    expect(board.getPiece(6, 2)).toBeInstanceOf(Pawn);
});

test("Move Piece to Invalid Col", () => {
    let board = new Board();
    expect(() => {board.movePiece(6, 2, 1, -1)}).toThrow(PositionOutOfBoundsException);
    expect(() => {board.movePiece(6, 2, 1, board.BOARD_MAX_INDEX + 1)}).toThrow(PositionOutOfBoundsException);
    expect(board.getPiece(6, 2)).toBeInstanceOf(Pawn);
});

test("Move Piece not there", () => {
    let board = new Board();
    expect(() => {board.movePiece(4, 2, 1, 2)}).toThrow(NoPieceThereException);
    expect(() => {board.movePiece(6, 2, 1, board.BOARD_MAX_INDEX + 1)}).toThrow(PositionOutOfBoundsException);
    expect(board.getPiece(6, 2)).toBeInstanceOf(Pawn);
});