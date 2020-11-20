import React from 'react'

function MainImage() {
    return (
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
    )
}

export default MainImage
