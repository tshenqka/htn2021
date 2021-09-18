import React, { useEffect } from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
// import SongIcon from './SongIcon';
import Song from './Song';
import coda from '../coda'

function Body() {
    const [song, setSong] = React.useState(null);

    useEffect(() => {
        coda.getDoc('19Z2_he_i3').then(doc => doc.getTable('grid-sS3AhHHpH1').then(table => table.listRows({useColumnNames: true}).then(res => {
            res.forEach(row => {
                setSong({id: row.id,
                notes: row.values.Notes})
            })
        })))
    }, [])

    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            {song && (
                <Song x={100} y={650} iconSize={200} noteSize={300} songName="Willow" artistName="Taylor Swift" rowId={song.id} initialNotes={song.notes}/>
            )}
      </ParallaxProvider>
    )
}

export default Body