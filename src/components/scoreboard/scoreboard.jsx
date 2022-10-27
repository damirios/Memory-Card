function Scoreboard(props) {

    return (
        <div className="scoreboard">
            <div className="scoreboard__best">Best score: <span className="scoreboard__best-span">0</span></div>
            <div className="scoreboard__current">Current score: <span className="scoreboard__current">0</span></div>
        </div>
    );
}

export default Scoreboard;