import Scoreboard from "./scoreboard/Scoreboard";

function Header(props) {

    function resetBest() {
        props.setBestScore(0);
    }

    function resetCurrent() {
        props.setClickedTitles([]);
        props.setCurrentScore(0);
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__title">
                        <div>Memory Game</div>
                        <div className="header__hover-to-read">
                            rules (hover to read)
                            <div className="header__rules">
                                <p>You must pick card that was not chosen earlier.</p>
                                <p>If you have pick the previously picked card, game is over.</p>
                                <p>Each card worth one point.</p>
                            </div>
                        </div>
                    </div>
                    <Scoreboard {...props} />
                    <div className="header__control-buttons control-buttons">
                        <button type='button' onClick={resetBest} className="control-buttons__reset-best">Reset best score</button>
                        <button type='button' onClick={resetCurrent} className="control-buttons__new-game">New game</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;