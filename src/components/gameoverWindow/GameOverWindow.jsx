import BestScore from '../scoreboard/BestScore';

function GameOverWindow(props) {
    
    let bestScoreOrNull = null;
    if (props.bestScore > props.prevBestScore) {
        bestScoreOrNull = <BestScore />
    }

    return (
        <div className="gameover">
            <div className="gameover__column">
                <div className="gameover__title">Game Over</div>
                <div className="gameover__score">Your score is <span>{props.score}</span></div>
                {bestScoreOrNull}
                <button type='button' onClick={props.resetCurrent} className="gameover__new-game">New game</button>
            </div>
        </div>
    );
}

export default GameOverWindow;