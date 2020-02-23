import React, {useEffect} from 'react';
import "./Inn.scss";
import inn from "../inn.png";
import LowerThird from "../LowerThird/LowerThird";
import ma from "../ma.png"; 

const Inn = ({openLT, setOpenLT, ltText, setLTText, ltAvatar, setLTAvatar}) => {
    useEffect (() => {
        console.log('test ran');
    }, [openLT] )

    const mapa = () => {
        setOpenLT(true);
        setLTAvatar(ma);
        setLTText("Ma: WE MISS JUNIOR! JUNIOR!")
    }
    
    const farmers = () => {
        setOpenLT(true);
        setLTText("Farmers: We are Farmers, badumbumbdumbum!")
    }  

    const bronwyn = () => {
        setOpenLT(true);
        setLTText("Bronwyn: FUCK OFF!!")
    }  

    const barkeep = () => {
        setOpenLT(true);
        setLTText("Barkeep Swanson: Weird folk about. Strange things happening in our quiet town.")
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
        </>
    )
}

export default Inn;