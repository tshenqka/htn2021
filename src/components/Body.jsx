import React, { useEffect } from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
import Song from './Song';
import Audio from './Audio';
import SongList from './SongList';
import coda from '../coda';

function Body() {
    const [alive, setAlive] = React.useState(false);

    function startSong() {
        setAlive(true);
    }

    const [songs, setSongs] = React.useState([]);

    useEffect(() => {
        coda.getDoc('19Z2_he_i3').then(doc => doc.getTable('grid-sS3AhHHpH1').then(table => table.listRows({useColumnNames: true}).then(res => {
            var newSongs = []
            res.forEach(row => {
                newSongs.push({id: row.id,
                    notes: row.values.Notes})
            })
            setSongs(newSongs)
            console.log("new Songs", newSongs)
        })))
    }, [])

    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            { songs.length > 0 && 
                <SongList playlist={songs}/>
            }

      </ParallaxProvider>
    )
}

export default Body