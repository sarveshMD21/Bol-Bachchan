import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
import Chatpage from "./Components/Chatpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/chat">
            <Chatpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
