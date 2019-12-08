import React from 'react'
import "./Player.scss";
import av from "../psy.png";

const Player = () => {
    const playerArray = [
        {name: 'Fefe', av: av, hp: '100'}, 
        {name: 'Googoo', av: av, hp: '100'}, 
        {name: 'Kurm', av: av, hp: '100'}, 
        {name: 'Dudley', av: av, hp: '100'}, 
        {name: 'Faa', av: av, hp: '100'}, 
        {name: 'Eepep', av: av, hp: '100'}
    ];

    return (
        <React.Fragment>
            {playerArray.map((element, index) => {
                return (
                    <div key={index} className="playerContainer">
                        <img className="playerAV" src={element.av} alt="player avatar"/>
                        <div className="playerNameContainer">
                            <div className="playerName">{element.name}</div>
                        </div>
                        <div className="playerHealthContainer">
                            <div className="playerHealth">{element.hp}</div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Player