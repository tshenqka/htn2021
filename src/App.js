import './App.css';
import Stars from './components/Stars/Stars';
import Title from './components/Title/Title';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      
      <ParallaxProvider>
        <Title playlistName="Best Playlist Ever" creatorName="Wolgang Amadeus Mozart"></Title>
        <Stars/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
