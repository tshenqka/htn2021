import React from 'react';
import '../index.css';
import Box from '@mui/material/Box';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Title from './Title';
// import Stars from './Stars';
import SongIcon from './SongIcon';
import Note from './Note';

function Song(props) {
  const { songName, artistName, albumArtLink, x, y, iconSize, noteSize} = props;
    return (
      <Box
          sx={{
              display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                position: 'absolute', top: y, left: x
              },
          }}>
          <SongIcon x={0} y={0} size={iconSize} songName={songName} artistName={artistName}/>
          <Note x={-200} y={180} size={noteSize}/>
      </Box>
    )
}

export default Song