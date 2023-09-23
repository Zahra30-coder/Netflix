import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './R';

function Banner() {

    const [movie, setMovie] = useState([]);
    /*Responsible for whatever random movie gets selected at the top.*/

    /*useEffect is a piece of code that runs based on a given condition, runs when the banner component loads */

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrignals)
            console.log(request.data.results);

            setMovie(
                requests.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)

                ]
            )
            return request;

        }
        fetchData();
    }, []);

    

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/orignal/${movie?.backdrop}")`,
                backgroundPosition: "center center",
            }}
        >

            <div className='banner_contents'>
            {/*title*/}

            <h1>
                {movie?.title || movie?.name || movie?.orignal_name}
            </h1>

    

            </div>
            {/*Background image*/}

            {/*div > 2 buttons*/}
            {/*description*/}
        </header>
    );
}
export default Banner;