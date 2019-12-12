import React from 'react';
import "./GameContainer.scss";
import GameBar from "../GameBar/GameBar.jsx";
import Background from "../Background/Background.jsx";

const GameContainer = () => {
    return (
        <React.Fragment>
            <Background />
            <GameBar />
        </React.Fragment>
    )
}

export default GameContainer
