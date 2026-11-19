import { useState } from "react";
import Board from "../components/Board";
import Dice from "../components/Dice";
import PlayerPanel from "../components/PlayerPanel";
import "./Game.css";

const initialPlayers = [
  { id: "p1", name: "You", color: "#e63946", position: 1, isBot: false },
  { id: "b1", name: "Bot 1", color: "#457b9d", position: 1, isBot: true },
];

function Game() {
  const [players] = useState(initialPlayers);
  const [currentTurnId] = useState("p1");
  const [diceValue] = useState(1);

  return (
    <main className="game-page">
      <h1>Snakes and Ladders</h1>
      <div className="game-layout">
        <Board players={players} />
        <aside className="game-sidebar">
          <Dice value={diceValue} />
          <PlayerPanel players={players} currentTurnId={currentTurnId} />
        </aside>
      </div>
    </main>
  );
}

export default Game;