import React from 'react';
import '../index.css';
import Box from '@mui/material/Box';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Title from './Title';
// import Stars from './Stars';
// import SongIcon from './SongIcon';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Note from './Note';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TITLE_Y_POS = -200;
const TEXT_X_POS = 240;
const LOC_X_POS = -95;
const LOC_Y_POS = -50;

function Song(props) {
  const { songName, artistName, albumArtLink, x, y, iconSize, noteSize, initialNotes, rowId, docId, tableId} = props;

  const [showText, setShowText] = React.useState(false);
  
  function onMouseEnter() {
      //startSong();
      setShowText(!showText);
      console.log("ENTER");
  }

  return (
    <Box style={{ position: 'absolute', top: y, left: x, zIndex: 100000}}>
      <div>
        <Box
            sx={{
                display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                    m: 1, width: iconSize, height: iconSize, position: 'relative', top: 0, left: 0
                },
            }}
        >
          <img src={albumArtLink} style={{ borderRadius: '50%'}} onClick={onMouseEnter} alt="test art"/>
        </Box>
        <LocationOnIcon sx={{ fontSize: 100, color: '#67bfcd', position: 'absolute', top: LOC_Y_POS, left: iconSize + LOC_X_POS, transform: 'rotate(15deg)'}}/>
      </div>
      <div>
        <Fade in={showText}>
          <div>
          <Typography component="div">
            <Box sx={{ typography: 'h3', color: '#f4cb85', position: 'relative', top: TITLE_Y_POS, left: TEXT_X_POS, textAlign: 'left'}}>
                { songName }
            </Box>
            <Box sx={{ typography: 'p', color: '#f4cb85', position: 'relative', top: TITLE_Y_POS, left: TEXT_X_POS, textAlign: 'left'}}>
                {`by ${artistName}`}
            </Box>
          </Typography>
          <Note x={iconSize+25} y={-200} size={noteSize} initialNotes={initialNotes} rowId={rowId} docId={docId} tableId={tableId}/>
          </div>
        </Fade>
      </div>
    </Box>
  )
}

export default Song;
