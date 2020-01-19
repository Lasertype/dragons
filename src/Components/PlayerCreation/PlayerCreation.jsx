import React, {useState, useEffect} from 'react';
import Styles from "./PlayerCreation.scss";
import ReactModal from "react-modal";
import Player from "../Player/Player";

const PlayerCreation = ({modalStatus, setModalStatus, party, setParty, selectedHero, setSelectedHero, selectedHeroes, setSelectedHeroes}) => {
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
        console.log('select hero runs');
        if (party.some(object => object.name === element.name)) {
            console.log('out of function');
            return;
        }

        const newSelectedHero = {};

        if (selectedHero == {}) {
          newSelectedHero[element.id] = true;
        } else if (selectedHero[element.id] == true) {
          newSelectedHero[element.id] = false;
        } else if (selectedHero[element.id] == false || !selectedHero[element.id]) {
          newSelectedHero[element.id] = true;
        }

        setSelectedHero(newSelectedHero);

        let newPartyState = party;
        newPartyState.push(element);
        setSelectedHeroes(newPartyState);
    }

    const createParty = () => {
        setParty(selectedHeroes);
        setModalStatus(false);
        setSelectedHero({});      
    }

    const cancelParty = () => {
        setParty([]);
        setModalStatus(false);
        setSelectedHero({});      
    }

    return (
        <ReactModal
        isOpen={modalStatus}
        ariaHideApp={false}
        onAfterClose={()=>{}}
        onRequestClose={cancelParty}
        overlayClassName={"overlay"}
        className={"partyModal"}
        >
            <div className="playerCreationContainer">
                <div className="playerCreationTitleContainer">
                    <div className="playerCreationTitle">Welcome, Adventurers!</div>
                </div>
                <div className="playerModalAreaContainer">
                        {playerBank.map((element, index) => {
                            return (
                                <div
                                    id={element.id} 
                                    key={element.id} 
                                    className={`playerModalContainer ${selectedHero[element.id] ? "selected" : ""}`} 
                                    onClick={() => selectHero(element)}
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
                <div className="addButtonContainer">
                    <div onClick={createParty} className="addButton">Let's Go!</div>
                </div>
            </div>
        </ReactModal>
    )
}

export default PlayerCreation;
