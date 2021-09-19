import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import Song from './Song';
import Audio from './Audio';
import Path from './Path';

function SongList(props) {
    const { playlist } = props;
    const [alive, setAlive] = useState(false);
    const [songId, setSongId] = useState(false);
    const [currentSong, setCurrentSong] = useState('');
    const numSongs = playlist.length;

    function startSong(newSongId) {
        setSongId(newSongId)
        setAlive(true);
        setCurrentSong(newSongId);
    }

    console.log("PLAYLIST: ", playlist)

    const testArt = 'https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_320/Taylor_Swift_folklore.jpeg'
    const X_OFFSETS = [50, 600, 150, 550, 200, 700, 100, 500, 200, 600, 150, 700];
    const ICON_SIZE = 200;
    function renderSongs() {
        var songs = []
        if (playlist.length <= 0) return <div></div>
        else console.log(playlist[0]);
        for (var i = 0; i < numSongs; i++) {
            songs.push(
                <Song x={X_OFFSETS[i]} y={650+i*250} iconSize={ICON_SIZE} noteSize={300} 
                    songName="Willow"
                    artistName="Taylor Swift"
                    startSong={startSong}
                    currentSong={currentSong}
                    albumArtLink={testArt}
                    initialNotes={playlist[i].notes}
                    songId={playlist[i].songId}
                    rowId={playlist[i].id}
                    />
            )
            if (i !== numSongs - 1) {
                songs.push(
                    <Path x1={X_OFFSETS[i]+ICON_SIZE/2} y1={650+i*250 + ICON_SIZE} x2={X_OFFSETS[i+1] + ICON_SIZE/2} y2={650+(i+1)*250 + ICON_SIZE}/>
                )
            }
            
        }
        return (<div style={{ width: 800, position: 'relative'}}> { songs } </div>);
    }

    return (
        <div style={{width: '100%', alignItems: 'center', position: 'absolute', top: 0}}>
            {renderSongs()}
            <Audio alive={alive} songId={songId}/>
        </div>
        
    )
}

export default SongList;