import React, { useEffect } from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
//import Audio from './Audio';
import SongList from './SongList';
import coda from '../coda';

function Body() {
    //const [alive, setAlive] = React.useState(false);

    const [songs, setSongs] = React.useState([]);
    const [songsDetails, setSongsDetails] = React.useState([]);

    useEffect(() => {
        var newSongs = []
        coda.getDoc('19Z2_he_i3').then(doc => doc.getTable('grid-sS3AhHHpH1').then(table => table.listRows({useColumnNames: true}).then(res => {
            res.forEach(row => {
                newSongs.push({id: row.id,
                    songId: row.values.SongId,
                    notes: row.values.Notes,
                })
            })
            setSongs(newSongs)
        })))
    }, [])

    useEffect(() => {
        var updatedSongs = [];
        // get song info from id
        const token = localStorage.getItem('token');
        if (token !== null && token !== undefined && songs.length > 0) {
            console.log("MY TOKEN WOKEN: ", token);
            var promises = [];
            for (var i = 0; i < songs.length; i++) {
                const song = songs[i];
                promises.push(fetch(`https://api.spotify.com/v1/tracks/${song.songId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        //console.log(data.album.artists[0].name);
                        //console.log(data.album.href)
                        updatedSongs.push({
                            id: song.id,
                            songId: song.songId,
                            notes: song.notes,
                            songName: data.name,
                            artistName: data.album.artists[0].name,
                            albumArtLink: data.album.images[0].url
                        })
                    }
                }))
            }
            Promise.all(promises).then(_ => {
                setSongsDetails(updatedSongs)
                console.log("updated Songs: ", updatedSongs)
            })
        }
        
    }, [songs])

    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            { songsDetails.length > 0 && 
                <SongList playlist={songsDetails}/>
            }

      </ParallaxProvider>
    )
}

export default Body