import React from 'react';
import '../index.css';

function Body() {
    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            <SongIcon x={500} y={1000} size={200} songName="Willow" artistName="Taylor Swift"/>
      </ParallaxProvider>
    )
}

export default Body