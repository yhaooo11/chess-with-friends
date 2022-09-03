import { Chessboard } from "react-chessboard";
import Board from "./models/Board";

export default function App() {

  let board = new Board();

  return (
    <div>
      <Chessboard position={board.getPiecesToString()} id="BasicBoard" />
    </div>
  );
}
