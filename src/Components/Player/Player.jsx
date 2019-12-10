import React, { useState, useEffect, Component } from 'react'
import "./Player.scss";
import av from "../psy.png";

const Player = ({playerList}) => {
    // const playerArray = [
    //     {name: 'Kurm', av: av, hp: '100'}, 
    //     {name: 'Dudley', av: av, hp: '100'}, 
    //     {name: 'Faa', av: av, hp: '100'}, 
    //     {name: 'Eepep', av: av, hp: '100'}
    // ];
    const fuseEffect = () => {
        console.log('playerList: ', playerList);
    };

    const generatePlayers = () => {
        return (
            <React.Fragment>
                {playerList.map((element, index) => {
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
        );
    };

    return (
        <button onClick={fuseEffect}></button>
    )
}

export default Player