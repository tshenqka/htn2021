import './App.css';
import Stars from './components/Stars';
import Title from './components/Title';
import { ParallaxProvider } from 'react-scroll-parallax';
import SongIcon from './components/SongIcon';

function App() {
  return (
    <div className="App">
      
      <ParallaxProvider>
        <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
        <Stars/>
        <SongIcon x={500} y={1000} size={200} songName="Willow" artistName="Taylor Swift"/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
