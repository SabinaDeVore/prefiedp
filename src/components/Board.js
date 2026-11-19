import "./Board.css";

const SNAKES = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
const LADDERS = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

function Board({ players = [], onSquareClick }) {
  const squares = [];
  for (let row = 9; row >= 0; row--) {
    const rowSquares = [];
    for (let col = 0; col < 10; col++) {
      const base = row * 10;
      const num = row % 2 === 0 ? base + col + 1 : base + (10 - col);
      rowSquares.push(num);
    }
    if (row % 2 !== 0) rowSquares.reverse();
    squares.push(...rowSquares);
  }

  return (
    <section aria-label="Game board" className="board-section">
      <div className="board-grid">
        {squares.map((num) => (
          <div
            key={num}
            className={`board-square ${SNAKES[num] ? "snake" : ""} ${LADDERS[num] ? "ladder" : ""}`}
            data-square={num}
            onClick={() => onSquareClick && onSquareClick(num)}
          >
            <span className="square-number">{num}</span>
            <div className="tokens">
              {players
                .filter((p) => p.position === num)
                .map((p) => (
                  <div
                    key={p.id}
                    className={`token ${p.isBot ? "bot" : "human"}`}
                    style={{ background: p.color }}
                    title={p.name}
                  >
                    {p.avatar ? <img src={p.avatar} alt={p.name} /> : p.name.charAt(0)}
                  </div>
                ))}
            </div>
            {SNAKES[num] && <span className="snake-tag">to {SNAKES[num]}</span>}
            {LADDERS[num] && <span className="ladder-tag">to {LADDERS[num]}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Board;