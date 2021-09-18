import React, { useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import Button from '@mui/material/Button';

function Audio(props) {
  const { alive } = props;
  const [play, setPlay] = React.useState(false);
  // const [alive, setAlive] = React.useState(false);
  const token = localStorage.getItem('token');
  if (token != null) {
      return (
        <div>
        {alive && (
          <SpotifyPlayer
            token={token}
            initialVolume={0.1}
            play={true}
            uris={['spotify:track:2xizRhme7pYeITbH1NLLGt']}
          />
        )}
        {/* <Button onClick={() => setAlive(true)}>Test</Button> */}
        </div>
      )
  }
  return null
}

export default Audio