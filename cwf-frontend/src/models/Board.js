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
        this.tiles = [
            [
                new Tile(0, 0, new Rook(COLOR.black)),
                new Tile(0, 1, new Knight(COLOR.black)),
                new Tile(0, 2, new Bishop(COLOR.black)),
                new Tile(0, 3, new Queen(COLOR.black)),
                new Tile(0, 4, new King(COLOR.black)),
                new Tile(0, 5, new Bishop(COLOR.black)),
                new Tile(0, 6, new Knight(COLOR.black)),
                new Tile(0, 7, new Rook(COLOR.black))
            ],
            [
                new Tile(1, 0, new Pawn(COLOR.black)),
                new Tile(1, 1, new Pawn(COLOR.black)),
                new Tile(1, 2, new Pawn(COLOR.black)),
                new Tile(1, 3, new Pawn(COLOR.black)),
                new Tile(1, 4, new Pawn(COLOR.black)),
                new Tile(1, 5, new Pawn(COLOR.black)),
                new Tile(1, 6, new Pawn(COLOR.black)),
                new Tile(1, 7, new Pawn(COLOR.black))
            ],
            [
                new Tile(2, 0),
                new Tile(2, 1),
                new Tile(2, 2),
                new Tile(2, 3),
                new Tile(2, 4),
                new Tile(2, 5),
                new Tile(2, 6),
                new Tile(2, 7)
            ],
            [
                new Tile(3, 0),
                new Tile(3, 1),
                new Tile(3, 2),
                new Tile(3, 3),
                new Tile(3, 4),
                new Tile(3, 5),
                new Tile(3, 6),
                new Tile(3, 7)
            ],
            [
                new Tile(4, 0),
                new Tile(4, 1),
                new Tile(4, 2),
                new Tile(4, 3),
                new Tile(4, 4),
                new Tile(4, 5),
                new Tile(4, 6),
                new Tile(4, 7)
            ],
            [
                new Tile(5, 0),
                new Tile(5, 1),
                new Tile(5, 2),
                new Tile(5, 3),
                new Tile(5, 4),
                new Tile(5, 5),
                new Tile(5, 6),
                new Tile(5, 7)
            ],
            [
                new Tile(6, 0, new Pawn(COLOR.white)),
                new Tile(6, 1, new Pawn(COLOR.white)),
                new Tile(6, 2, new Pawn(COLOR.white)),
                new Tile(6, 3, new Pawn(COLOR.white)),
                new Tile(6, 4, new Pawn(COLOR.white)),
                new Tile(6, 5, new Pawn(COLOR.white)),
                new Tile(6, 6, new Pawn(COLOR.white)),
                new Tile(6, 7, new Pawn(COLOR.white))
            ],
            [
                new Tile(7, 0, new Rook(COLOR.white)),
                new Tile(7, 1, new Knight(COLOR.white)),
                new Tile(7, 2, new Bishop(COLOR.white)),
                new Tile(7, 3, new Queen(COLOR.white)),
                new Tile(7, 4, new King(COLOR.white)),
                new Tile(7, 5, new Bishop(COLOR.white)),
                new Tile(7, 6, new Knight(COLOR.white)),
                new Tile(7, 7, new Rook(COLOR.white))
            ]
        ];
    }
    // turns the pieces object in the tiles field to strings
    // to be used for react-chessboard in order to render 
    getPiecesToString() {
        const copyTiles = [...this.tiles];
        const result = {};
        
        for (let row of copyTiles) {
            for (let tile of row) {
                if (tile.piece === null) {
                    result[tile.toChessCoords()] = '';
                } else {
                    result[tile.toChessCoords()] = tile.piece.getInitials();
                }
            }
        }

        console.log(result);
        return result;
    }
}