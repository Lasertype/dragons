import React, {useState} from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import GameStart from "../GameStart/GameStart.jsx";
import Inn from "../Inn/Inn.jsx";
import PlayerCreation from '../PlayerCreation/PlayerCreation';

const GameContainer = () => {
    const [master, setMaster] = useState(0);
    const [modalStatus, setModalStatus] = useState(false); 
    const [party, setParty] = useState([]);
    const [selectedModalHeroes, setselectedModalHeroes] = useState([]);
    const [openLT, setOpenLT] = useState(false);
    const [ltText, setLTText] = useState(null);
    const [ltAvatar, setLTAvatar] = useState(null);

    const masterRender = masterValue => {
    // switch (masterValue) {
    //   case 0:
    //     return <GameStart modalStatus={modalStatus} setModalStatus={setModalStatus} setParty={setParty}/>;
    //   case 1:
    //     return <Inn />;
    //   default:
    //     return <GameBar />;
    // }
    return <Inn openLT={openLT} setOpenLT={setOpenLT} ltText={ltText} setLTText={setLTText} ltAvatar={ltAvatar} setLTAvatar={setLTAvatar} />
}

return (
        <React.Fragment>
          <div className="encounterContainer">
            {masterRender(master)}
          </div>
            <div className="gameBarContainer">
              <GameBar master={master} setMaster={setMaster} party={party} />
            </div>
            <PlayerCreation modalStatus={modalStatus} setModalStatus={setModalStatus} setParty={setParty} selectedModalHeroes={selectedModalHeroes} setselectedModalHeroes={setselectedModalHeroes} />
            
        </React.Fragment>
    )
}

export default GameContainer
