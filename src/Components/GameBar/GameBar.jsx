import React, {useEffect, useState} from 'react';
import "./GameBar.scss";
import logo from "../logo_concept.png";
import Player from "../Player/Player";
import av from "../psy.png";

const GameBar = ({master, setMaster, party}) => {
    const incrementMaster = () => {
        const currentMasterValue = master;
        setMaster(currentMasterValue + 1);
    }

    const decrementMaster = () => {
        const currentMasterValue = master;
        setMaster(currentMasterValue - 1);
    }

    return (
        <div className="gameBarContainer">
            <div className="darkOverlay" />
            <div className="enemyContainer" />
            <div className="titleContainer" >
                {/* <div onClick={decrementMaster}>Prev</div> */}
                <img className="logo" src={logo} alt="logo" onClick={incrementMaster}/>
            </div>
            <div className="partyContainer">
                <div className="partyArea">
                    <Player 
                        party={party}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameBar;
