import React, {useEffect, useState} from 'react';
import "./GameBar.scss";
import logo from "../../Components/Images/logo_concept.png";
import Player from "../Player/Player";
import av from "../Images/psy.png";

const GameBar = ({master, setMaster, party, incrementMaster, decrementMaster}) => {

    return (
        <>
        <div className="darkOverlay" />
        <div className="enemyContainer" />
        <div className="iconContainer" >
            <button style={{position: "absolute"}}onClick={decrementMaster}>Prev</button>
            <img className="logo" src={logo} alt="logo" onClick={incrementMaster}/>
        </div>
        <div className="partyContainer">
            <div className="partyArea">
                <Player 
                    party={party}
                />
            </div>
        </div>
        </>
    )
}

export default GameBar;
