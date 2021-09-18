import React from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
import Song from './Song';
import Audio from './Audio';
import SongList from './SongList';

function Body() {
    const [alive, setAlive] = React.useState(false);

    function startSong() {
        setAlive(true);
    }

    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            <SongList/>
            
           
      </ParallaxProvider>
    )
}

export default Body