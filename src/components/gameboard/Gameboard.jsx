import Card from "./Card";
import {v4 as uuidv4} from 'uuid';
import shuffle from '../utilities/shuffle'

function Gameboard(props) {
    const games = [
        {title: 'The Last of Us', img: './images/TLOU.jpg', id: uuidv4()},
        {title: 'Bioshock Infinite', img: './images/Bioshock-Infinite.jpg', id: uuidv4()},
        {title: 'Prey', img: './images/Prey.jfif', id: uuidv4()},
        {title: 'Uncharted', img: './images/Uncharted.jfif', id: uuidv4()},
        {title: 'Prince of Persia', img: './images/Prince-of-Persia.jfif', id: uuidv4()},
        {title: 'Undertale', img: './images/Undertale.jfif', id: uuidv4()},
        {title: 'Days Gone', img: './images/Days-Gone.jfif', id: uuidv4()},
        {title: 'Horizon Zero Dawn', img: './images/Horizon-Zero-Dawn.jfif', id: uuidv4()},
        {title: 'Dishonored', img: './images/Dishonored.jfif', id: uuidv4()},
        {title: 'Resident Evil', img: './images/Resident-Evil.jfif', id: uuidv4()},
        {title: 'Celeste', img: './images/Celeste.jfif', id: uuidv4()},
        {title: 'Spyro', img: './images/Spyro.jfif', id: uuidv4()},
        {title: 'Fallout', img: './images/Fallout.jfif', id: uuidv4()},
        {title: 'Nier Automata', img: './images/Nier-Automata.jfif', id: uuidv4()},
        {title: 'Crash Bandicoot', img: './images/Crash-Bandicoot.jfif', id: uuidv4()}
    ];

    const shuffledGames = shuffle(games);

    return (
        <div className="gameboard">
            {shuffledGames.map(game => {
                return <Card title={game.title} img={game.img} key={game.id} />
            })}
        </div>
    );
}

export default Gameboard;