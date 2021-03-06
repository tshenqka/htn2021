import React, { useEffect } from 'react';
import '../index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import Stars from './Stars';
//import Audio from './Audio';
import SongList from './SongList';
import coda from '../coda';
import { useLocation } from 'react-router';

function Body() {
    //const [alive, setAlive] = React.useState(false);

    const [songs, setSongs] = React.useState([]);
    const location = useLocation();
    const [docId, setDocId] = React.useState([]);
    const [tableId, setTableId] = React.useState(null);
    const [songsDetails, setSongsDetails] = React.useState([]);
    const [playlistName, setPlaylistName] = React.useState("")
    const [creatorName, setCreatorName] = React.useState("")

    useEffect(() => {
        var newSongs = []
        const tempDocId = location.pathname.split("/")[2]
        if (tempDocId !== null && tempDocId !== undefined) {
            setPlaylistName("loading")
            setDocId(tempDocId)
            coda.getDoc(tempDocId).then(doc => doc.listTables().then(tables => doc.getTable(tables[0].id).then(table => {
                setTableId(tables[0].id);
                setPlaylistName(table.name.split(" - ")[0])
                setCreatorName(table.name.split(" - by ")[1])
                return table.listRows({useColumnNames: true}).then(res => {
                    res.forEach(row => {
                        newSongs.push({id: row.id,
                            songId: row.values.SongId,
                            notes: row.values.Notes,
                        })
                    })
                    setSongs(newSongs)
                })
            })))
        } else {
            setPlaylistName("Failed")
        }
    }, [location])

    // useEffect(() => {
    //     var newSongs = []
    //     coda.getDoc('19Z2_he_i3').then(doc => doc.getTable('grid-sS3AhHHpH1').then(table => {
    //         setPlaylistName(table.name.split(" - ")[0])
    //         setCreatorName(table.name.split(" - by ")[1])
    //     }))
    //     coda.getDoc('19Z2_he_i3').then(doc => doc.getTable('grid-sS3AhHHpH1').then(table => table.listRows({useColumnNames: true}).then(res => {
    //         res.forEach(row => {
    //             newSongs.push({id: row.id,
    //                 songId: row.values.SongId,
    //                 notes: row.values.Notes,
    //             })
    //         })
    //         setSongs(newSongs)
    //     })))
    // }, [])

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
            { (playlistName !== "" && playlistName !== "loading" && playlistName !== "Failed") && 
                <Title playlistName={playlistName} creatorName={creatorName}></Title>
            }
            { playlistName === "Failed" &&
                <Title playlistName={"Please go to /docs/<doc_id>"} creatorName={""}></Title>
            }
            <Stars/>
            { songsDetails.length > 0 && 
                <SongList playlist={songsDetails} docId={docId} tableId={tableId}/>
            }

      </ParallaxProvider>
    )
}

export default Body