import {useState} from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import './styles/css/style.css';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOverWindow, setGameOverWindow] = useState(false);

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} setBestScore={setBestScore} setCurrentScore={setCurrentScore}/>
      <Main gameOver={gameOverWindow} setGameOver={setGameOverWindow} currentScore={currentScore} 
        bestScore={bestScore} setBestScore={setBestScore} setCurrentScore={setCurrentScore}/>
      <Footer />
    </div>
  );
}

export default App;
