import React from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';

function MovieDetailsPage() {

    useEffect(() => {
       fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default MovieDetailsPage
