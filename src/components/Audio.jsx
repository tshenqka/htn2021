import React from 'react';
import '../index.css';

function Audio() {
  const token = localStorage.getItem('token');
  if (token != null) {
    // const player = new Spotify.Player({
    //   name: 'Web Playback SDK Quick Start Player',
    //   getOAuthToken: cb => { cb(token); },
    //   volume: 0.5
    // });
      return (
        <div></div>
      )
  }
  return (<div></div>)
}

export default Audio