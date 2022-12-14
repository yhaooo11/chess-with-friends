import { Chessboard } from "react-chessboard";
import Board from "./models/Board";
import { defaultBoard, noPawnsBoard, blackCheckmated, blackInCheck, whiteCheckmated, whiteInCheck, piecesInMiddle, cannotCastle, canCastle, blackStalemate, cannotCastleBlack, canCastleBlack } from "./models/testing_boards/TestBoards";

export default function App() {

  let board = blackStalemate;

  return (
    <div>
      <Chessboard position={board.getPiecesToString()} id="BasicBoard" boardOrientation={'white'}/>
    </div>
  );
}
