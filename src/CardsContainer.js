import { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import './CardsContainer.css'

const CardsContainer = (props) => {
    useEffect(()=>{
        fetchAnimeData();
    },[])
    const [animes, setAnimes]  = useState([])

    const fetchAnimeData = async () => {
        const response = await fetch("https://api.jikan.moe/v4/schedules?filter="+props.CurrentDateDay);
        const data = await response.json()
        let animes = data.data.map(anime =>{
            return {
                id : anime.mal_id,
                img : anime.images.jpg.image_url,
                title : anime.title,
                episodes : anime.episodes,
                time : anime.broadcast.time,
            }            
        })

        animes = animes.filter(anime => anime.time !== null);

        animes.sort((a, b) => 
            a.time.localeCompare(b.time, undefined, { numeric: true })
        );

        setAnimes(animes);
        console.log(animes);
    }

    

    return(
        <section className='anime-cards-container'>
            {animes.map(anime => {
                return  <AnimeCard anime={anime}></AnimeCard>
            })}          
        </section>
    );
}

export default CardsContainer;