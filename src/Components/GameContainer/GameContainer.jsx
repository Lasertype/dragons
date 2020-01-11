import React, {useState} from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import Background from "../Background/Background.jsx";
import PlayerCreation from '../PlayerCreation/PlayerCreation';

const GameContainer = () => {
    const [modal, setModal] = useState(false); 
    const [players, setPlayers] = useState([]);
    const [master, setMaster] = useState(0)
        
    const renderMaster = masterValue => {
    switch (masterValue) {
      case 0:
        return <Background />;
      case 1:
        return <PlayerCreation />;
      default:
        return <GameBar />;
    }
}

return (
        <React.Fragment>
            <div className="masterRender">
                {renderMaster(master)}
            </div>
            <GameBar modal={modal} setModal={setModal} players={players} master={master} setMaster={setMaster}/>
            <PlayerCreation modal={modal} setModal={setModal} players={players} setPlayers={setPlayers} />
            
        </React.Fragment>
    )
}

export default GameContainer
