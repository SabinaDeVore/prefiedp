import "./PlayerPanel.css";

function PlayerPanel({ players = [], currentTurnId }) {
  return (
    <section aria-label="Players" className="player-panel">
      <h2>Players</h2>
      <ul>
        {players.map((p) => (
          <li key={p.id} className={p.id === currentTurnId ? "active" : ""}>
            <span className="swatch" style={{ background: p.color }} />
            <span className="name">{p.name}</span>
            <span className="badge">{p.isBot ? "Bot" : "You"}</span>
            <span className="pos">Square {p.position}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PlayerPanel;
