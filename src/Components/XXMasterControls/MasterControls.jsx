import React, { useState, useEffect, Component } from 'react';
import "./MasterControls.scss";
import ReactModal from "react-modal";
import av from "../Images/psy.png";

const MasterControls = ({setPlayers, players}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const createCharacter = (e) => {
        e.preventDefault();
        handleOpenModal();

        console.log('modal status: ', modalOpen);
    };

    const createPlayers = (e) => {
        e.preventDefault();

        const playerArray = 
            [
                {name: 'Fefe', av: av, hp: '100'}, 
                {name: 'Googoo', av: av, hp: '100'}
            ];

        setPlayers(playerArray);

        console.log('players: ', players);
    };

    return (
        <div className="masterViewContainer">
            <div className="TitleContainer">
                <div className="Title">Master Controls</div>
            </div>
            <div className="createCharacterContainer">
                <button onClick={createCharacter} className="createCharacterButton">Create Character</button>
            </div>
            <ReactModal 
                isOpen={modalOpen}
                ariaHideApp={false}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={modalStyle}
                contentLabel="Example Modal"
            >
                <form>
                    <button onClick={createPlayers}>create players</button>
                </form>
                <button onClick={handleCloseModal}>Close</button>
            </ReactModal>   
        </div>
    )
}

export default MasterControls
