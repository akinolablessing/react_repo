import React from "react";
import {useGetNowPlayingMoviesQuery} from "../../services/movieApi.jsx";
import MovieCard from "../../reuseable/MovieCard.jsx"
const NowPlaying = () =>{
    const data = useGetNowPlayingMoviesQuery()
    console.log(data)

    return(
        <div>
            <MovieCard data={data}/>
        </div>
    )
}
export default NowPlaying