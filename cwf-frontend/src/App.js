import { Chessboard } from "react-chessboard";
import Board from "./models/Board";
import { defaultBoard, noPawnsBoard, blackCheckmated, blackInCheck, whiteCheckmated, whiteInCheck, piecesInMiddle } from "./models/testing_boards/TestBoards";

export default function App() {

  let board = blackInCheck;

  return (
    <div>
      <Chessboard position={board.getPiecesToString()} id="BasicBoard" boardOrientation={'white'}/>
    </div>
  );
}
