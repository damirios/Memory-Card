function Header(props) {

    return (
        <div className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__title">Memory Game</div>
                    <div className="header__control-buttons control-buttons">
                        <button type='button' className="control-buttons__reset-best">Reset best score</button>
                        <button type='button' className="control-buttons__new-game">New game</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;