import { Color } from "../../enums/Color";
import { defaultBoard, noPawnsBoard, blackCheckmated, blackInCheck, whiteCheckmated, whiteInCheck, piecesInMiddle, cannotCastle, canCastle, blackStalemate, cannotCastleBlack, canCastleBlack, kingMoveByCapture  } from "../../testing_boards/TestBoards";
import King from "../King";

test('Constructor Black King', () => {
    let king = new King(Color.BLACK);
    expect(king.canCastle).toBe(true);
    expect(king.color).toBe(Color.BLACK);
    expect(king.getInitials()).toBe("bK");
});

test('Constructor White King', () => {
    let king = new King(Color.WHITE);
    expect(king.canCastle).toBe(true);
    expect(king.color).toBe(Color.WHITE);
    expect(king.getInitials()).toBe("wK");
});

test("defaultBoard", () => {
    let board = defaultBoard;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toHaveLength(0);

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toHaveLength(0);
});

test("noPawnsBoard", () => {
    let board = noPawnsBoard;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[6, 4], [6, 5]].sort());

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 4], [1, 5]].sort());
});

test("blackCheckmated", () => {
    let board = blackCheckmated;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[6, 4], [7, 5], [7, 3]].sort());

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.getPiece().getValidMoves(board, blackKingTile)).toHaveLength(0);
});

test("blackInCheck", () => {
    let board = blackInCheck;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[6, 4], [7, 5], [7, 3]].sort());

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 4], [0, 5]].sort());
});

test("whiteCheckmated", () => {
    let board = whiteCheckmated;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toHaveLength(0);

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 4], [0, 5], [0, 3]].sort());
});

test("whiteInCheck", () => {
    let board = whiteInCheck;
    let whiteKingTile = board.getTile(7, 6);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[7, 7]]);

    let blackKingTile = board.getTile(0, 6);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 5], [0, 7]].sort());
});

test("piecesInMiddle", () => {
    let board = piecesInMiddle;
    let whiteKingTile = board.getTile(7, 6);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[7, 7], [6, 5]].sort());

    let blackKingTile = board.getTile(0, 6);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 5], [0, 7], [0, 5]].sort());
});

test("cannotCastle", () => {
    let board = cannotCastle;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toHaveLength(0);

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 3]]);
});

test("canCastle", () => {
    let board = canCastle;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[7, 5], [7, 6]].sort());

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 3]]);
});

test("canCastleBlack", () => {
    let board = canCastleBlack;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[6, 3]]);

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[0, 3], [0, 2]].sort());
});

test("cannotCastleBlack", () => {
    let board = cannotCastleBlack;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[6, 3]]);

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toHaveLength(0);
});

test("blackStalemate", () => {
    let board = blackStalemate;
    let whiteKingTile = board.getTile(7, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[7, 3], [6, 3], [6, 4], [6, 5], [7, 5]].sort());

    let blackKingTile = board.getTile(0, 1);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toHaveLength(0);
});

test("kingMoveByCapture", () => {
    let board = kingMoveByCapture;
    let whiteKingTile = board.getTile(6, 4);
    expect(whiteKingTile.piece.getValidMoves(board, whiteKingTile).sort()).toEqual([[5, 3], [6, 5]].sort());

    let blackKingTile = board.getTile(0, 4);
    expect(blackKingTile.piece.getValidMoves(board, blackKingTile).sort()).toEqual([[1, 4], [0, 3]].sort());
});