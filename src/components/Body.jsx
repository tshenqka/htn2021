import React from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
import SongIcon from './SongIcon';

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