import React, { useState, useEffect, Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.scss';
import GameContainer from "../GameContainer/GameContainer.jsx";
import MasterControls from "../MasterControls/MasterControls.jsx";
import GameBar from '../GameBar/GameBar.jsx';

const App = () => {
  const [players, setPlayers] = useState(['ffe', 'dd']);

  return (
    <div>
    <button onClick={(() => {console.log('app players: ', players)})}></button>
    <Router>
        <Switch>
          <Route path="/game">
            <GameContainer />
            <GameBar 
              playerList={players}
            />
          </Route>
          <Route path="/master">
            <MasterControls 
              setPlayers={setPlayers}
              players={players}
            />
          </Route>
        </Switch>
    </Router>
  </div>
  );
}

export default App;
