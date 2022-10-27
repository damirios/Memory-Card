function Scoreboard(props) {
    const {bestScore, currentScore} = props;
    return (
        <div className="scoreboard">
            <div className="scoreboard__best">Best score: <span className="scoreboard__best-span">{bestScore}</span></div>
            <div className="scoreboard__current">Current score: <span className="scoreboard__current">{currentScore}</span></div>
        </div>
    );
}

export default Scoreboard;