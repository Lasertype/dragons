import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';
import GameContainer from "../GameContainer/GameContainer.jsx";

const App = () => {
  // new clone test
  return (
    <Router>
        <Switch>
          <Route 
            path="/game" 
            name="game"
            exact 
            component={GameContainer}
          />
        </Switch>
        <Redirect exact from="/" to="game" />
    </Router>
  );
}

export default App;
