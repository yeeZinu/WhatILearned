import './Score.css';

function Score({ score, man }) {
  return (
    <div class="Score">
      <div class="Score-num">{score}</div>
      <div class="Score-name">{man}</div>
    </div>
  );
}
export default Score;