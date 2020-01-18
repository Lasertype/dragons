import React from 'react';
import "./Background.scss";

const Background = ({setPlayers, modalStatus, setModalStatus, setParty}) => {
    const toggleModal = () => {
        setModalStatus(!modalStatus);
        setPlayers([]);
        setParty([]);
    }

    return (
        <>
        <img alt="background_image" src="https://www.fodors.com/wp-content/uploads/2019/01/HERO_Alaska_BooksMovies_dreamstime_108778603.jpg"></img>
        <div className="party" onClick={toggleModal}>Welcome, Adventurers!</div>
        </>
    )
}

export default Background;