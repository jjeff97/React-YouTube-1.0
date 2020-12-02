import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import {Typography, Row} from 'antd';
import MainImage from './Sections/MainImage';
import { ReactReduxContext } from 'react-redux';

const {Title} = Typography;

function LandingPage() {

   const [Movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setMovies(response.results)
      });
  }, []);

  return (
    <div style={{ width: '100%', margin: 0 }}>
      {/* Movie main image */}
      {Movies[0] &&
      <MainImage image={`${IMAGE_URL}w1280${Movies[0].backdrop_path}`} 
      title={Movies[0].original_title} text={Movies[0].overview}/>
      }
      
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
39%,rgba(0,0,0,0)
41%rgba(0,0,0,0.65)
100%),
url(''), #1c1c1c`,
          height: '500px',
          backgroundSize: '100%, cover',
          backgroundPosition: 'center, center',
          width: '100%',
          position: 'relative',
        }}
      ></div>
      <div>
        <div
          style={{
            position: 'absolute',
            maxWidth: '500px',
            bottom: '2rem',
            marginLeft: '2rem',
          }}
        >
          <Title style={{ color: 'white' }} level={2}>
            Title</Title>
            <p style={{ color: 'white', fontSize: '1rem' }}> text</p>
          
        </div>
      </div>
      {/* Body */}

      <div  style={{ width:'85%', margin: '1rem auto'}}>
      <Title  level={2}>
            Movies by Title</Title>

            <hr/>

            {/* Grid Card */}
            <Row gutter={[16, 16]}>
{Movies && Movies.map((movie, index) => (
  <React.Fragment>
<GridCard
/>

  </React.Fragment>
 ) )}

            </Row>
            {/* Load More Button */}
            <br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button onClick> Load More</button>
            </div>

      </div>
    </div>
  );
}

export default LandingPage;
