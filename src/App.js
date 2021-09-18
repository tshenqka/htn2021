import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Body from './components/Body';

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
