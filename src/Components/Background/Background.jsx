import React from 'react';
import "./Background.scss";
import dmconcept from "../dmconcept.png";

const Background = ({modalStatus, setModalStatus, setParty}) => {
    const toggleModal = () => {
        setModalStatus(!modalStatus);
        setParty([]);
    }

    return (
        <>
        <div className="gameTitle">Dragon's Mountain</div>
        <img alt="background_image" src={dmconcept}></img>
        <div className="party-container" >
            <div className="party-text" onClick={toggleModal}>Start Adventure!</div>
        </div>
        </>
    )
}

export default Background;