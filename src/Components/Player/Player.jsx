import React, {useEffect} from 'react'
import "./Player.scss";
import av from "../psy.png";

const Player = ({party}) => {
    useEffect(() => {
        console.log('player useeffect ran');
    }, [party]);

    return (
        <React.Fragment>
        {party.map((element, index) => {
            return (
                <div key={index} className="playerContainer">
                    <img className="playerAV" src={av} alt="player avatar"/>
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