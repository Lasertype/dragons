import React, { useState, useEffect, Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.scss';
import GameContainer from "../GameContainer/GameContainer.jsx";
import MasterControls from "../MasterControls/MasterControls.jsx";
import GameBar from '../GameBar/GameBar.jsx';

const App = () => {
  const [players, setPlayers] = useState(['ffe', 'dd']);

  return (
    <Router>
        <Switch>
          <Route path="/game" exact render={props => <GameContainer {...props} />}/>
          <Route path="/master" exact render={props => <MasterControls {...props} />}/>
        </Switch>
    </Router>
  );
}

export default App;
