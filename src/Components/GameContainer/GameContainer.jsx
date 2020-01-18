import React, {useState} from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import Background from "../Background/Background.jsx";
import PlayerCreation from '../PlayerCreation/PlayerCreation';

const GameContainer = () => {
    const [modalStatus, setModalStatus] = useState(false); 
    const [players, setPlayers] = useState([]);
    const [master, setMaster] = useState(0);
    const [newPlayerNameString, setNewPlayerNameString] = useState(null);
    const [party, setParty] = useState([]);
    const [partyIDs, setPartyIDs] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(false);

        
    const renderMaster = masterValue => {
    switch (masterValue) {
      case 0:
        return <Background setPlayers={setPlayers} modalStatus={modalStatus} setModalStatus={setModalStatus} setParty={setParty}/>;
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
            <GameBar players={players} master={master} setMaster={setMaster} newPlayerNameString={newPlayerNameString} setNewPlayerNameString={setNewPlayerNameString}/>
            <PlayerCreation modalStatus={modalStatus} setModalStatus={setModalStatus} players={players} setPlayers={setPlayers} party={party} setParty={setParty} partyIDs={partyIDs} setPartyIDs={setPartyIDs} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}/>
            
        </React.Fragment>
    )
}

export default GameContainer
