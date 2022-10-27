import Card from "./Card";
import shuffle from '../utilities/shuffle';
import games from '../constants/constants';
import { useState } from "react";

function Gameboard(props) {
    const [gamesToRender, setGamesToRender] = useState(games);
    const [clickedTitles, setClickedTitles] = useState([]);

    const { bestScore, currentScore, setBestScore, setCurrentScore } = props;


    function gameOver() {
        setClickedTitles([]);
        
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
        setCurrentScore(0);
    }

    function cardClickHandle(e) {
        const gameTitle = e.target.closest('.card').querySelector('.card__title').textContent;
        
        if ( !clickedTitles.includes(gameTitle) ) {
            setClickedTitles(clickedTitles.concat([gameTitle]));
            setCurrentScore(currentScore + 1);
            setGamesToRender(shuffle(games));
        } else {
            gameOver();
        }
    }

    return (
        <div className="gameboard">
            {gamesToRender.map(game => {
                return <Card classPrefix='gameboard' cardClicked={cardClickHandle} title={game.title} img={game.img} key={game.id} />
            })}
        </div>
    );
}

export default Gameboard;