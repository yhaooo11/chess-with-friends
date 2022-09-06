import Board from '../Board';

// See https://docs.google.com/document/d/1YDknnQyAA1lH7RgMLXDRaDaQvfOZepjNN-Is8aK10nI/edit?usp=sharing
// for visualization
export var defaultBoard = new Board();

let noPawnsBoard = new Board();
for (let i = 0; i <= noPawnsBoard.BOARD_MAX_INDEX; i++) {
    let tile = noPawnsBoard.getTile(1, i);
    tile.removePiece();
}

for (let i = 0; i <= noPawnsBoard.BOARD_MAX_INDEX; i++) {
    let tile = noPawnsBoard.getTile(6, i);
    tile.removePiece();
}

let blackCheckmated = new Board();
blackCheckmated.movePiece(0, 1, 2, 0);
blackCheckmated.movePiece(0, 5, 2, 2);
blackCheckmated.movePiece(1, 4, 3, 4);
blackCheckmated.movePiece(7, 5, 4, 2);
blackCheckmated.movePiece(6, 4, 4, 4);
blackCheckmated.movePiece(7, 3, 1, 5);

let blackInCheck = new Board();
blackInCheck.movePiece(0, 5, 3, 2);
blackInCheck.movePiece(7, 5, 4, 2);
blackInCheck.movePiece(1, 4, 3, 4);
blackInCheck.movePiece(6, 4, 4, 4);
blackInCheck.movePiece(1, 5, 2, 5);
blackInCheck.movePiece(7, 3, 3, 7);

let whiteCheckmated = new Board();
whiteCheckmated.movePiece(0, 3, 6, 5);
whiteCheckmated.movePiece(0, 5, 3, 2);
whiteCheckmated.movePiece(1, 4, 3, 4);
whiteCheckmated.movePiece(6, 4, 4, 4);
whiteCheckmated.movePiece(6, 1, 5, 1);
whiteCheckmated.movePiece(7, 1, 5, 0);

let whiteInCheck = new Board();
whiteInCheck.getTile(0, 1).removePiece();
whiteInCheck.getTile(1, 1).removePiece();
whiteInCheck.getTile(0, 1).removePiece();
whiteInCheck.getTile(1, 2).removePiece();
whiteInCheck.getTile(1, 4).removePiece();
whiteInCheck.getTile(0, 5).removePiece();
whiteInCheck.movePiece(0, 3, 2, 1);
whiteInCheck.movePiece(1, 5, 2, 5);
whiteInCheck.movePiece(0, 4, 0, 6);
whiteInCheck.movePiece(0, 7, 0, 5);
whiteInCheck.getTile(6, 1).removePiece();
whiteInCheck.getTile(6, 2).removePiece();
whiteInCheck.getTile(6, 3).removePiece();
whiteInCheck.getTile(6, 4).removePiece();
whiteInCheck.getTile(7, 1).removePiece();
whiteInCheck.getTile(7, 5).removePiece();
whiteInCheck.movePiece(6, 5, 5, 5);
whiteInCheck.movePiece(7, 6, 5, 7);
whiteInCheck.movePiece(7, 0, 7, 1);
whiteInCheck.movePiece(7, 4, 7, 6);
whiteInCheck.movePiece(7, 7, 7, 5);

let piecesInMiddle = new Board();
piecesInMiddle.getTile(0, 1).removePiece();
piecesInMiddle.getTile(0, 5).removePiece();
piecesInMiddle.getTile(0, 6).removePiece();
piecesInMiddle.getTile(1, 1).removePiece();
piecesInMiddle.getTile(1, 2).removePiece();
piecesInMiddle.getTile(1, 4).removePiece();
piecesInMiddle.movePiece(0, 4, 0, 6);
piecesInMiddle.movePiece(0, 0, 0, 4);
piecesInMiddle.movePiece(0, 7, 2, 4);
piecesInMiddle.movePiece(0, 3, 2, 2);
piecesInMiddle.movePiece(0, 2, 4, 2);
piecesInMiddle.movePiece(1, 5, 2, 5);
piecesInMiddle.getTile(7, 1).removePiece();
piecesInMiddle.getTile(7, 5).removePiece();
piecesInMiddle.getTile(6, 1).removePiece();
piecesInMiddle.getTile(6, 2).removePiece();
piecesInMiddle.getTile(6, 3).removePiece();
piecesInMiddle.getTile(6, 4).removePiece();
piecesInMiddle.movePiece(7, 0, 7, 1);
piecesInMiddle.movePiece(7, 2, 4, 5);
piecesInMiddle.movePiece(7, 3, 3, 5);
piecesInMiddle.movePiece(7, 6, 4, 3);
piecesInMiddle.movePiece(7, 4, 7, 6);
piecesInMiddle.movePiece(7, 7, 5, 4);
piecesInMiddle.movePiece(6, 5, 5, 5);







export {noPawnsBoard, blackCheckmated, blackInCheck, whiteCheckmated, whiteInCheck, piecesInMiddle};
