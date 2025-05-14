import React from "react";
import {useGetNowPlaingMovies} from "../../services/movieApi.jsx";
import MovieCard from "../../reuseable/MovieCard.jsx"
const NowPlaying = () =>{
    const data = useGetNowPlaingMovies()

    return(
        <div>
            <MovieCard data={data}/>
        </div>
    )
}
export default NowPlaying