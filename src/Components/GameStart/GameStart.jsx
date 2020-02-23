import React from 'react';
import "./GameStart.scss";
import dmconcept from "../dmconcept.png";

const GameStart = ({modalStatus, setModalStatus, setParty}) => {
    const toggleModal = () => {
        setModalStatus(!modalStatus);
        setParty([]);
    }

    return (
        <>
        <div className="gameTitle">Dragon's Mountain</div>
        <img alt="backgroundImage" src={dmconcept}></img>
        <div className="startButtonContainer" >
            <div className="startButtonText" onClick={toggleModal}>Start Adventure!</div>
        </div>
        </>
    )
}

export default GameStart;