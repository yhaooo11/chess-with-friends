import { COLOR } from "./enums/Color";
import Tile from "./Tile";
import Rook from "./pieces/Rook";
import Bishop from "./pieces/Bishop";
import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Pawn from "./pieces/Pawn";
import Knight from "./pieces/Knight";


export default class Board {
    constructor() {
        this.tiles = {
            a1: new Tile(7, 0, new Rook(COLOR.white)),
            b1: new Tile(7, 1, new Knight(COLOR.white)),
            c1: new Tile(7, 2, new Bishop(COLOR.white)),
            d1: new Tile(7, 3, new Queen(COLOR.white)),
            e1: new Tile(7, 4, new King(COLOR.white)),
            f1: new Tile(7, 5, new Bishop(COLOR.white)),
            g1: new Tile(7, 6, new Knight(COLOR.white)),
            h1: new Tile(7, 7, new Rook(COLOR.white)),

            a2: new Tile(6, 0, new Pawn(COLOR.white)),
            b2: new Tile(6, 1, new Pawn(COLOR.white)),
            c2: new Tile(6, 2, new Pawn(COLOR.white)),
            d2: new Tile(6, 3, new Pawn(COLOR.white)),
            e2: new Tile(6, 4, new Pawn(COLOR.white)),
            f2: new Tile(6, 5, new Pawn(COLOR.white)),
            g2: new Tile(6, 6, new Pawn(COLOR.white)),
            h2: new Tile(6, 7, new Pawn(COLOR.white)),

            a3: new Tile(5, 0),
            b3: new Tile(5, 1),
            c3: new Tile(5, 2),
            d3: new Tile(5, 3),
            e3: new Tile(5, 4),
            f3: new Tile(5, 5),
            g3: new Tile(5, 6),
            h3: new Tile(5, 7),

            a4: new Tile(4, 0),
            b4: new Tile(4, 1),
            c4: new Tile(4, 2),
            d4: new Tile(4, 3),
            e4: new Tile(4, 4),
            f4: new Tile(4, 5),
            g4: new Tile(4, 6),
            h4: new Tile(4, 7),

            a5: new Tile(3, 0),
            b5: new Tile(3, 1),
            c5: new Tile(3, 2),
            d5: new Tile(3, 3),
            e5: new Tile(3, 4),
            f5: new Tile(3, 5),
            g5: new Tile(3, 6),
            h5: new Tile(3, 7),

            a6: new Tile(2, 0),
            b6: new Tile(2, 1),
            c6: new Tile(2, 2),
            d6: new Tile(2, 3),
            e6: new Tile(2, 4),
            f6: new Tile(2, 5),
            g6: new Tile(2, 6),
            h6: new Tile(2, 7),

            a7: new Tile(1, 0, new Pawn(COLOR.black)),
            b7: new Tile(1, 1, new Pawn(COLOR.black)),
            c7: new Tile(1, 2, new Pawn(COLOR.black)),
            d7: new Tile(1, 3, new Pawn(COLOR.black)),
            e7: new Tile(1, 4, new Pawn(COLOR.black)),
            f7: new Tile(1, 5, new Pawn(COLOR.black)),
            g7: new Tile(1, 6, new Pawn(COLOR.black)),
            h7: new Tile(1, 7, new Pawn(COLOR.black)),

            a8: new Tile(0, 0, new Rook(COLOR.black)),
            b8: new Tile(0, 1, new Knight(COLOR.black)),
            c8: new Tile(0, 2, new Bishop(COLOR.black)),
            d8: new Tile(0, 3, new Queen(COLOR.black)),
            e8: new Tile(0, 4, new King(COLOR.black)),
            f8: new Tile(0, 5, new Bishop(COLOR.black)),
            g8: new Tile(0, 6, new Knight(COLOR.black)),
            h8: new Tile(0, 7, new Rook(COLOR.black)),
        }

    }
    // turns the pieces object in the tiles field to strings
    // to be used for react-chessboard in order to render 
    getPiecesToString() {
        var copyTiles = {...this.tiles}

        for (const [key, value] of Object.entries(copyTiles)) {
            if (value.piece === null) {
                copyTiles[key] = '';
            } else {
                value.piece.getValidMoves(this, value)
                copyTiles[key] = value.piece.getInitials();
            }
        }
        return copyTiles;
    }
}