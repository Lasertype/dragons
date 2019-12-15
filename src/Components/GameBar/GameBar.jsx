import React, {useEffect, useState} from 'react';
import "./GameBar.scss";
import logo from "../logo_concept.png";
import Player from "../Player/Player";
import av from "../psy.png";

const GameBar = ({modal, setModal, players}) => {
    const [newPlayerNameString, setNewPlayerNameString] = useState(null);

    // const setNewPlayer = nameString => {
    //     let playerArray = players;
    //     let newPlayer = {name: nameString, hp: '100'}
    //     playerArray.push(newPlayer);
    //     setPlayers(playerArray);
    //     console.log(players);
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setNewPlayer(newPlayerNameString);
    // };

    // const handleInput = e => {
    //     console.log(newPlayerNameString);
    //     setNewPlayerNameString(e.target.value);
    // };

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className="gameBarContainer">
            <div className="darkOverlay"></div>
            <div className="enemyContainer">
                {/* <form action="submit" onSubmit={handleSubmit}>
                    <input onChange={handleInput} type="text"></input>
                    <input type="submit"/>
                </form> */}
            </div>
            <div className="titleContainer" onClick={toggleModal} >
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="partyContainer">
                <div className="partyArea">
                    <Player 
                        players={players}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameBar;
