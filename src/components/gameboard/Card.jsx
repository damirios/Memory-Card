function Card(props) {
    const prefix = props.classPrefix;
    const {title, img} = props;


    return (
        <div className={`${prefix}__card card`}>
            <div className="card__image">
                <img src={img} alt="game-poster" />
            </div>
            <div className="card__title">{title}</div>
        </div>
    );
}

export default Card;