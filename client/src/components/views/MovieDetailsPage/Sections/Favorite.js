import React, {useEffect} from 'react';
import axios from 'axios';

function Favorite() {

useEffect(() => {

    const variable = {

    }
   
    axios.post('/api/favorite/favoriteNumber', variable)
    .then(response => {
        if(response.data.success){

        } else {
            alert('Failed to get favoriteNumber')
        }
    })
}, [])

    return (
        <div>
                      <button> Add to Favorites</button>

        </div>
    )
}

export default Favorite
