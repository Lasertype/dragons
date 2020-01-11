import React, {useState, useEffect} from 'react';
import Styles from "./PlayerCreation.scss";
import ReactModal from "react-modal";
import Player from "../Player/Player";

const PlayerCreation = ({modalStatus, setModalStatus, players, setPlayers}) => {
    const [party, setParty] = useState([]);
    const [partyIDs, setPartyIDs] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(false);

    const playerAvatar = React.createRef();

    // likely to be a db player bank get call    
    const playerBank = [
        {id: 1, name: 'Palafox', hp: '100'}, 
        {id: 2, name: 'Kaz', hp: '100'},
        {id: 3, name: 'Tuel', hp: '100'},
        {id: 4, name: 'Galiban', hp: '100'},
        {id: 5, name: 'Kaigon', hp: '100'},
        {id: 6, name: 'Dudley', hp: '100'},
    ];

    const selectHero = (element) => {
        // debugger;
        if (party.includes(element)) {
            console.log('out of function');
            return;
        }

        let partyState = party;
        partyState.push(element);
        setParty(partyState);

        let partyIDsState = partyIDs;
        partyIDsState.push(element.id);
        setPartyIDs(partyIDsState);

        console.log("select hero: ", element);
        console.log("party: ", party);

        if (partyIDs.includes(element.id)){
            
        }

    }

    const createParty = () => {
        setPlayers(party);
        setModalStatus(false);      
    }

    const cancelParty = () => {
        party = [];
        setPlayers(party);
        setModalStatus(false);
    }

    return (
        <ReactModal
        isOpen={modalStatus}
        ariaHideApp={false}
        onAfterClose={()=>{}}
        overlayClassName={"overlay"}
        className={"partyModal"}
        >
            <div className="playerCreationContainer">
                <div className="playerCreationTitleContainer">
                    <div className="playerCreationTitle">Welcome, Adventurers!</div>
                </div>
                {/* <div className="topSpacer"></div> */}
                <div className="playerModalAreaContainer">
                        {playerBank.map((element, id) => {
                            return (
                                <div
                                    id={element.id} 
                                    key={element.id} 
                                    className={"playerModalContainer"} 
                                    onClick={() => selectHero(element)}
                                    ref={playerAvatar}
                                >
                                    <div className="playerModalNameContainer">
                                        <div className="playerModalName">{element.name}</div>
                                    </div>
                                    <div className="playerModalAVContainer">
                                        <div className="playerModalAV"></div>
                                    </div>
                                    
                                </div>
                            )
                        })}
                        <div className="bottomSpacer"></div>
                </div>
                {/* <div className="bottomSpacer"></div> */}
                <div className="addButtonContainer">
                    <div onClick={createParty} className="addButton">Let's Go!</div>
                </div>
            </div>
        </ReactModal>
    )
}

export default PlayerCreation;


// {name: 'Palafox (3g)', av: av, hp: '100'}, 
// {name: 'Yissic (5g)', av: av, hp: '100'},
// {name: 'Tuel', av: av, hp: '100'},
// {name: 'Yelru', av: av, hp: '100'},
// {name: 'Kaigon', av: av, hp: '100'},
