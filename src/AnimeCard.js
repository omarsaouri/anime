const AnimeCard = (props) => {
    return (
        <article className='card'>
            <h2 className='anime-date'>{props.anime.time}</h2>
            <img className='anime-img' src={props.anime.img}></img>
            <div className='anime-info'>
                <h3 className='anime-title'>{props.anime.title}</h3>
                <p className='anime-eps'>{props.anime.episodes===null?"N/A":props.anime.episodes} Episodes</p>     
            </div>             
        </article>
    );
}

export default AnimeCard;