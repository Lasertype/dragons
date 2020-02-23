import React, {useEffect} from 'react';
import "./Inn.scss";
import inn from "../../Components/Images/inn.png";
import LowerThird from "../LowerThird/LowerThird";
import ma from "../../Components/Images/ma.png"; 

const Inn = ({openLT, setOpenLT, ltText, setLTText, ltAvatar, setLTAvatar}) => {
    useEffect (() => {
        console.log('test ran');
    }, [openLT] )

    const mapa = () => {
        setOpenLT(true);
        setLTAvatar(ma);
        setLTText("Ma: JUNIOR!")
    }
    
    const farmers = () => {
        setOpenLT(true);
        setLTText("Farmers: We are Farmers, badumbumbdumbum!")
    }  

    const bronwyn = () => {
        setOpenLT(true);
        setLTText("Bronwyn: Hrmff... You're in over your heads. Go home.")
    }  

    const barkeep = () => {
        setOpenLT(true);
        setLTText("Barkeep Swanson: Weird folk about. Strange things happening in our quiet town. Having a drink?")
    } 

    const mouse = () => {
        setOpenLT(true);
        setLTText("Mouse: Eep!");
    } 

    const cat = () => {
        setOpenLT(true);
        setLTText("Cat: I liek memes :3");
    } 

    const removeLT = () => {
        setOpenLT(false);
        setLTAvatar(null);
    }

    return (
        <>
        { openLT ? (<LowerThird ltText={ltText} ltAvatar={ltAvatar} />) : (null)} 
        <img alt="backgroundImage" onClick={removeLT} src={inn}></img>
        <div className="hitbox mapa" onClick={mapa}></div>
        <div className="hitbox farmers" onClick={farmers}></div>
        <div className="hitbox bronwyn" onClick={bronwyn}></div>
        <div className="hitbox barkeep" onClick={barkeep}></div>
        <div className="hitbox mouse" onClick={mouse}></div>
        <div className="hitbox cat" onClick={cat}></div>
        </>
    )
}

export default Inn;