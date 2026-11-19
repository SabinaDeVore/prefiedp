import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Snakes and Ladders</h1>
      <p>Welcome to the game.</p>
      <Link to="/game">Start Game</Link>
    </main>
  );
}

export default Home;
