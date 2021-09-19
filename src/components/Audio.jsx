import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

function Audio(props) {
  const { alive, songId } = props;
  //const [play, setPlay] = React.useState(false);
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
            uris={['spotify:track:'+songId]}
          />
        )}
        {/* <Button onClick={() => setAlive(true)}>Test</Button> */}
        </div>
      )
  }
  return null
}

export default Audio