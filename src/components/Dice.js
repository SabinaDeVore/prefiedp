import "./Dice.css";

function Dice({ value = 1, rolling = false, onRoll }) {
  return (
    <section aria-label="Dice" className="dice-section">
      <h2>Dice</h2>
      <div className={`dice ${rolling ? "rolling" : ""}`} data-value={value}>
        <span className="dice-value">{value}</span>
      </div>
      <button type="button" onClick={onRoll} disabled={rolling}>
        Roll Dice
      </button>
    </section>
  );
}

export default Dice;
