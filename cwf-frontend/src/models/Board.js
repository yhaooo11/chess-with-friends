import { Color } from "./enums/Color";
import { NoPieceThereException } from "./exceptions/NoPieceThereException"
import { PositionOutOfBoundsException } from "./exceptions/PositionOutOfBoundsException";

import Tile from "./Tile";

import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Rook from "./pieces/Rook";
import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";
import Pawn from "./pieces/Pawn";

export default class Board {
    constructor() {
        this.BOARD_MAX_INDEX = 7;
        this.tiles = [
            [
                new Tile(0, 0, new Rook(Color.BLACK)),
                new Tile(0, 1, new Knight(Color.BLACK)),
                new Tile(0, 2, new Bishop(Color.BLACK)),
                new Tile(0, 3, new Queen(Color.BLACK)),
                new Tile(0, 4, new King(Color.BLACK)),
                new Tile(0, 5, new Bishop(Color.BLACK)),
                new Tile(0, 6, new Knight(Color.BLACK)),
                new Tile(0, 7, new Rook(Color.BLACK))
            ],
            [
                new Tile(1, 0, new Pawn(Color.BLACK)),
                new Tile(1, 1, new Pawn(Color.BLACK)),
                new Tile(1, 2, new Pawn(Color.BLACK)),
                new Tile(1, 3, new Pawn(Color.BLACK)),
                new Tile(1, 4, new Pawn(Color.BLACK)),
                new Tile(1, 5, new Pawn(Color.BLACK)),
                new Tile(1, 6, new Pawn(Color.BLACK)),
                new Tile(1, 7, new Pawn(Color.BLACK))
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
                new Tile(6, 0, new Pawn(Color.WHITE)),
                new Tile(6, 1, new Pawn(Color.WHITE)),
                new Tile(6, 2, new Pawn(Color.WHITE)),
                new Tile(6, 3, new Pawn(Color.WHITE)),
                new Tile(6, 4, new Pawn(Color.WHITE)),
                new Tile(6, 5, new Pawn(Color.WHITE)),
                new Tile(6, 6, new Pawn(Color.WHITE)),
                new Tile(6, 7, new Pawn(Color.WHITE))
            ],
            [
                new Tile(7, 0, new Rook(Color.WHITE)),
                new Tile(7, 1, new Knight(Color.WHITE)),
                new Tile(7, 2, new Bishop(Color.WHITE)),
                new Tile(7, 3, new Queen(Color.WHITE)),
                new Tile(7, 4, new King(Color.WHITE)),
                new Tile(7, 5, new Bishop(Color.WHITE)),
                new Tile(7, 6, new Knight(Color.WHITE)),
                new Tile(7, 7, new Rook(Color.WHITE))
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

    /**
     * Return true if a piece is at given position, false otherwise
     * 
     * @throws {PositionOutOfBoundsException} - Position must be a valid board index
     * @param {int} row 
     * @param {int} col 
     * @returns {boolean}
     */
    isTileOccupied(row, col) {
        this.checkPositionIsValid(row, col);
        return this.tiles[row][col].piece !== null;
    }

    /**
     * Return the piece at a given position, null if none exists
     * 
     * @throws {PositionOutOfBoundsException} - Position must be a valid board index
     * @param {int} row 
     * @param {int} col 
     * @returns {Piece | null} The piece or null
     */
    getPiece(row, col) {
        this.checkPositionIsValid(row, col);
        return this.tiles[row][col].piece;
    }

    /**
     * Return the Tile at a given position
     * 
     * @throws {PositionOutOfBoundsException} - Position must be a valid board index
     * @param {int} row 
     * @param {int} col 
     * @returns {Tile}
     */
    getTile(row, col) {
        this.checkPositionIsValid(row, col);
        return this.tiles[row][col];
    }

    // TODO: make sure  there is a piece there
    /** 
     * Set current tile's piece to null, replace new tile with old tile's piece
     * 
     * @throws {PositionOutOfBoundsException, NoPieceThereException} - Positions must be a valid board index and a piece must be on starting square
     * @param {int} startRow 
     * @param {int} startCol 
     * @param {int} newRow 
     * @param {int} newCol 
     */
    movePiece(startRow, startCol, newRow, newCol) {
        this.checkPositionIsValid(startRow, startCol);
        this.checkPositionIsValid(newRow, newCol);
        let tile = this.getTile(startRow, startCol);
        if (tile.piece == null) {
            throw new NoPieceThereException("Position: [" + startRow + ", " + startCol + "] has no Piece to move")
        }
        let newTile = this.getTile(newRow, newCol);
        let piece = tile.piece;
        tile.removePiece();
        newTile.addPiece(piece);
    }

    /**
     * Throw PositionOutOfBoundsException if position not within the board
     *  
     * @throws {PositionOutOfBoundsException}
     * @param {int} row 
     * @param {int} col 
     */
    checkPositionIsValid(row, col) {
        if (row < 0 || col < 0 || row > this.BOARD_MAX_INDEX || col > this.BOARD_MAX_INDEX) {
            throw new PositionOutOfBoundsException("Position: [" + row + ", " + col + "] not within board boundaries");
        }
    }
}