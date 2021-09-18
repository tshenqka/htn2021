import React from 'react';
import '../index.css';
import Box from '@mui/material/Box';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Title from './Title';
// import Stars from './Stars';
import SongIcon from './SongIcon';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Note from './Note';

const TITLE_Y_POS = -200;
const TEXT_Y_POS = 80;
const TEXT_X_POS = 150;


function Song(props) {
  const { songName, artistName, albumArtLink, x, y, iconSize, noteSize} = props;

  const [showText, setShowText] = React.useState(false);
  const testArt = 'https://media.pitchfork.com/photos/5f1e2abad421092dd8f6c7ca/1:1/w_320/Taylor_Swift_folklore.jpeg'

  function onMouseEnter() {
      setShowText(!showText);
      console.log("ENTER");
  }

  function onMouseLeave() {
      setShowText(false);
      console.log("LEAVE");
  }
  return (
    <Box style={{ position: 'absolute', top: 500, left: 50}}>
      <Box
          sx={{
              display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                  m: 1, width: iconSize, height: iconSize, position: 'relative', top: y, left: x
              },
          }}
      >
        <img src={testArt} style={{ borderRadius: '50%'}} onClick={onMouseEnter} />
      </Box>
      <Fade in={showText}>
        <div>
        <Typography component="div">
              <Box sx={{ typography: 'h3', color: '#f4cb85', position: 'relative', top: y + TITLE_Y_POS, left: x + TEXT_X_POS}}>
                  { songName }
              </Box>
              <Box sx={{ typography: 'p', color: '#f4cb85', position: 'relative', top: y + TITLE_Y_POS, left: x + TEXT_X_POS}}>
                  {`by ${artistName}`}
              </Box>
          </Typography>
          <Note x={x+iconSize+25} y={y-200} size={noteSize}/>
        </div>
      </Fade>
    </Box>
  )
}

export default Song;

