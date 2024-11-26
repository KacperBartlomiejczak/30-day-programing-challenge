import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="not easy" targetTime={2}></TimerChallenge>
        <TimerChallenge title="getting tough" targetTime={10}></TimerChallenge>
        <TimerChallenge title="pros only" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
