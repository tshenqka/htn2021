import React from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
import Song from './Song';

function Body() {
    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            <Song x={100} y={650} iconSize={200} noteSize={300} songName="Willow" artistName="Taylor Swift" albumArtLink="https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_320/Taylor_Swift_folklore.jpeg"/>
            <Song x={600} y={1300} iconSize={200} noteSize={300} songName="Jail" artistName="Kanye West" albumArtLink="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/A_black_background.jpg/640px-A_black_background.jpg"/>
            <Song x={100} y={1950} iconSize={200} noteSize={300} songName="Shape of You" artistName="Ed Sheeran" albumArtLink="https://www.edsheeran.com/sites/g/files/g2000006291/f/201703/Pack-Shot_0.jpg"/>
        </ParallaxProvider>
    )
}

export default Body