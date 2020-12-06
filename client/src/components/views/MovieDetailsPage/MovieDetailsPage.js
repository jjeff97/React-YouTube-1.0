import React, {useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';


function MovieDetailsPage(props) {

    const [Movie, setMovie] = useState([])

    useEffect(() => {

        const movieId = props.match.params.movieId

       fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(response=> {
            console.log(response)
            setMovie(response)
        })
    }, [])

    return (
        <div>
             {Movie && 
        <MainImage
          image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      }
        </div>
    )
}

export default MovieDetailsPage
