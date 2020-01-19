import React, {useState} from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import Background from "../Background/Background.jsx";
import PlayerCreation from '../PlayerCreation/PlayerCreation';

const GameContainer = () => {
    const [master, setMaster] = useState(0);
    const [modalStatus, setModalStatus] = useState(false); 
    const [party, setParty] = useState([]);
    const [selectedHero, setSelectedHero] = useState({});
    const [selectedHeroes, setSelectedHeroes] = useState([]);

    const masterRender = masterValue => {
    switch (masterValue) {
      case 0:
        return <Background modalStatus={modalStatus} setModalStatus={setModalStatus} setParty={setParty}/>;
      case 1:
        return <PlayerCreation />;
      default:
        return <GameBar />;
    }
}

return (
        <React.Fragment>
            <div className="masterRender">
                {masterRender(master)}
            </div>
            <GameBar master={master} setMaster={setMaster} party={party} />
            <PlayerCreation modalStatus={modalStatus} setModalStatus={setModalStatus} party={party} setParty={setParty} selectedHero={selectedHero} setSelectedHero={setSelectedHero} selectedHeroes={selectedHeroes} setSelectedHeroes={setSelectedHeroes} />
            
        </React.Fragment>
    )
}

export default GameContainer
