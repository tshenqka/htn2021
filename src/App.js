import './css/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Body from './Body';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Body/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
