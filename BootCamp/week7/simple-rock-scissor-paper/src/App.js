import { useState } from 'react';
import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';
import './App.css';
import Score from './Score';

const INITIAL_VALUE = 'rock';
const INITIAL_WINNER = 'Hand winner';
const INITIAL_LOSER = 'Hand';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [myHand, setMyHand] = useState(INITIAL_LOSER);
  const [yourHand, setYourHand] = useState(INITIAL_LOSER);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) {
      setScore(score + bet)
      setMyHand(INITIAL_WINNER);
      setYourHand(INITIAL_LOSER);
    };
    if (comparison < 0) {
      setOtherScore(otherScore + bet)
      setMyHand(INITIAL_LOSER);
      setYourHand(INITIAL_WINNER);
    };
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className='App'>
      <h1 className='App-heading'>가위바위보</h1>
      <Button className='App-reset' onClick={handleClearClick}></Button>
      <div class="App-scores">
        <Score score={score} man={'나'} />
        <div class="App-versus">:</div>
        <Score score={otherScore} man={'상대'} />
      </div>

      <div className='Box App-box'>
        <div className='Box-inner'>
          {/* 여기 클래스 이름으로 승자 체크해주기 */}
          <div className='App-hands'>
            <div className={myHand}>
              <HandIcon className='Hand-icon' value={hand} />
            </div>
            VS
            <div className={yourHand}>
              <HandIcon className='Hand-icon' value={otherHand} />
            </div>
          </div>
          {/* 베팅 단위 체크 */}
          <div className='App-bet'>
            <span>배점</span><input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input><span>배</span>
          </div>
          <div className='App-history'>
            <h2>승부 기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
        </div>
      </div>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
