import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/orignal/"

function Row({title,fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [], run once when the row loads, and dont run it again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //'https://api.moviesdb.org/3' api_key will be replaced with our API_KEY
            console.log(request.data.result);
            //to check the data structure we are getting back
            return request; 
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies)

    return( 
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <img
                    key={movie.id}
                    className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                    /*if its large it gets the large styling*/

                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} 
                    alt={movie.name}/>
                ))}
            </div>
            

        </div>

    );
}
export default Row;
