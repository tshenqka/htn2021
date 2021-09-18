import React from 'react';
import '../index.css';
import Box from '@mui/material/Box';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Title from './Title';
// import Stars from './Stars';
import SongIcon from './SongIcon';
import Note from './Note';

function Song(props) {
  const { x, y } = props;
    return (
      <Box
          sx={{
              display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                position: 'absolute', top: y, left: x
              },
          }}>
          <SongIcon x={0} y={0} size={200} songName="Willow" artistName="Taylor Swift"/>
          <Note x={-100} y={200} size={200}/>
      </Box>
    )
}

export default Song