function Scoreboard(props) {

    return (
        <div className="scoreboard">
            <div className="scoreboard__best">Best score: <span className="scoreboard__best-span"></span></div>
            <div className="scoreboard__current">Current score: <span className="scoreboard__current"></span></div>
        </div>
    );
}

export default Scoreboard;