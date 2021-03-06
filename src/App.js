import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/docs/:docId">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
