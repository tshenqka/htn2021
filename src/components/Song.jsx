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
const TEXT_X_POS = 150;
const LOC_X_POS = -95;
const LOC_Y_POS = -50;


function Song(props) {
  const { songName, artistName, x, y, iconSize, noteSize, startSong} = props;

  const [showText, setShowText] = React.useState(false);
  const testArt = 'https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_320/Taylor_Swift_folklore.jpeg'

  function onMouseEnter() {
      startSong();
      setShowText(!showText);
      console.log("ENTER");
  }

  return (
    <Box style={{ position: 'absolute', top: y, left: x}}>
      <Box
          sx={{
              display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                  m: 1, width: iconSize, height: iconSize, position: 'relative', top: 0, left: 0
              },
          }}
      >
        <img src={testArt} style={{ borderRadius: '50%'}} onClick={onMouseEnter} alt="test art"/>
      </Box>
      <LocationOnIcon sx={{ fontSize: 100, color: '#67bfcd', position: 'absolute', top: LOC_Y_POS, left: iconSize + LOC_X_POS, transform: 'rotate(15deg)'}}/>
      <Fade in={showText}>
        <div>
        <Typography component="div">
              <Box sx={{ typography: 'h3', color: '#f4cb85', position: 'relative', top: TITLE_Y_POS, left: TEXT_X_POS}}>
                  { songName }
              </Box>
              <Box sx={{ typography: 'p', color: '#f4cb85', position: 'relative', top: TITLE_Y_POS, left: TEXT_X_POS}}>
                  {`by ${artistName}`}
              </Box>
          </Typography>
          <Note x={iconSize+25} y={-200} size={noteSize}/>
        </div>
      </Fade>
    </Box>
  )
}

export default Song;

