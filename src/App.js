import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Body from './components/Body';
import Audio from './components/Audio';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Audio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
