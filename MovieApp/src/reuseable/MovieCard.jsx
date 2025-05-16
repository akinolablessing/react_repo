import React from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard=(props)=>{
    const {data, isLoading}= props.data;
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }
    return(
        <div>
            {
                data?.results.map((result)=>(

                    <div key={result.id}>
                        <img src={`${imageBaseUrl}${result.poster_path}`} alt="image" />
                        <p>{result.overview}</p>
                        <p>{result.title}</p>
                        <p>{result.vote_count}</p>
                        <p>{result.vote_average}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default MovieCard;