import {useState} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import usePrevious from './components/customHooks/usePrevious';

import './styles/css/style.css';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const prevBestScore = usePrevious(bestScore);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOverWindow, setGameOverWindow] = useState(false);
  const [clickedTitles, setClickedTitles] = useState([]);

  function resetCurrent() {
    setClickedTitles([]);
    setGameOverWindow(false);
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Header resetCurrent={resetCurrent} currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} setCurrentScore={setCurrentScore}
        setClickedTitles={setClickedTitles} setGameOver={setGameOverWindow} />
      <Main resetCurrent={resetCurrent} gameOver={gameOverWindow} setGameOver={setGameOverWindow} currentScore={currentScore} 
        bestScore={bestScore} setBestScore={setBestScore} prevBestScore={prevBestScore} setCurrentScore={setCurrentScore} clickedTitles={clickedTitles}
        setClickedTitles={setClickedTitles}/>
      <Footer />
    </div>
  );
}

export default App;
