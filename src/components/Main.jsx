import Gameboard from "./gameboard/Gameboard";
import GameOverWindow from "./gameoverWindow/GameOverWindow";

function Main(props) {

    const {gameOver, setGameOver} = props;

    const gameOverWindow = gameOver ? <GameOverWindow resetCurrent={props.resetCurrent} score={props.currentScore} prevBestScore={props.prevBestScore} 
        bestScore={props.bestScore} /> : null;

    return (
        <div className={`content ${gameOver ? 'blur': ''}`}>
            {gameOverWindow}
            <div className="content__row">
                <Gameboard {...props} />
            </div>
        </div>
    );
}

export default Main;