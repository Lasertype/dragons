import React from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";

const GameContainer = () => {
    return (
        <React.Fragment>
            <div className="masterGameContainer"></div>
            <GameBar />
        </React.Fragment>
    )
}

export default GameContainer
