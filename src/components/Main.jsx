import Gameboard from "./gameboard/Gameboard";

function Main(props) {

    return (
        <div className="content">
            <div className="content__row">
                <Gameboard {...props} />
            </div>
        </div>
    );
}

export default Main;