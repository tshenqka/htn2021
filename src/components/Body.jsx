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

    useEffect(() => {
        const tempDocId = location.pathname.split("/")[2]
        if (tempDocId !== null && tempDocId !== undefined) {
            setDocId(tempDocId)
            coda.getDoc(tempDocId).then(doc => doc.listTables().then(tables => doc.getTable(tables[0].id).then(table => table.listRows({useColumnNames: true}).then(res => {
                var newSongs = []
                res.forEach(row => {
                    newSongs.push({id: row.id,
                        notes: row.values.Notes})
                })
                setSongs(newSongs)
                console.log("new Songs", newSongs)
                setTableId(tables[0].id);
            }))))
        }
    }, [location])

    return (
        <ParallaxProvider>
            <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
            <Stars/>
            { songs.length > 0 && 
                <SongList playlist={songs} docId={docId} tableId={tableId} />
            }

      </ParallaxProvider>
    )
}

export default Body