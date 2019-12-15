import React, {useState} from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import Background from "../Background/Background.jsx";
import PlayerCreation from '../PlayerCreation/PlayerCreation';

const GameContainer = () => {
    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([]);
        
    return (
        <React.Fragment>
            <Background />
            <GameBar modal={modal} setModal={setModal} players={players} />
            <PlayerCreation modal={modal} setModal={setModal} players={players} setPlayers={setPlayers} />
        </React.Fragment>
    )
}

export default GameContainer
