import React, {useState, useEffect} from 'react';
import Styles from "./PlayerCreation.scss";
import ReactModal from "react-modal";
import Player from "../Player/Player";

const PlayerCreation = ({setMaster, modalStatus, setModalStatus, setParty, selectedModalHeroes, setselectedModalHeroes, incrementMaster}) => {
    // a db player bank get call    
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
        const modalHeroes = selectedModalHeroes;

        if (modalHeroes.some(object => object.id === element.id)) {
            const removeIndex = modalHeroes.map((object) => {return object.id}).indexOf(element.id);
            modalHeroes.splice(removeIndex, 1);
        } else {
            modalHeroes.push(element);
        }
        
        const modalHeroesToPush = [].concat(modalHeroes)
        setselectedModalHeroes(modalHeroesToPush);
    }

    const checkForSelected = (element) => {
        if (selectedModalHeroes.some(object => object.id === element.id)){
            return true;
        }
    }

    const createParty = () => {
        setParty(selectedModalHeroes);
        setModalStatus(false); 
        setselectedModalHeroes([]);
    }

    const cancelParty = () => {
        setParty([]);
        setModalStatus(false);
        setselectedModalHeroes([]);      
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
                    <div className="playerCreationTitle">Y'alls Brave</div>
                </div>
                <div className="playerModalAreaContainer">
                        {playerBank.map((element, index) => {
                            return (
                                <div
                                    id={element.id} 
                                    key={element.id} 
                                    className="playerModalContainer"
                                    onClick={() => selectHero(element)}
                                >
                                    <div className="playerModalNameContainer">
                                        <div className="playerModalName">{element.name}</div>
                                    </div>
                                    <div className={`playerModalAVContainer ${checkForSelected(element) ? "selected noHover" : ""}`}>
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
