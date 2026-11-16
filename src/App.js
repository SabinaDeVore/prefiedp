import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Snakes and Ladders</h1>;
}

function Game() {
  return <h1>Game Board</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;