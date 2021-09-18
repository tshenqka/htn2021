import React from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
// import SongIcon from './SongIcon';
import Song from './Song';

function Body() {
    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            <Song x={100} y={650} iconSize={200} noteSize={300} songName="Willow" artistName="Taylor Swift"/>
      </ParallaxProvider>
    )
}

export default Body