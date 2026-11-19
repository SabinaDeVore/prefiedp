import Board from "../components/Board";
import Dice from "../components/Dice";
import PlayerPanel from "../components/PlayerPanel";

function Game() {
  return (
    <main>
      <h1>Snakes and Ladders</h1>
      <Board />
      <Dice />
      <PlayerPanel />
    </main>
  );
}

export default Game;
