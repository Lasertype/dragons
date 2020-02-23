import React, {useEffect} from 'react';
import "./Inn.scss";
import backdrop from "../innbackdrop.png";
import LowerThird from "../LowerThird/LowerThird";

const Inn = ({openLT, setOpenLT, ltText, setLTText, ltAvatar, setLTAvatar}) => {
    useEffect (() => {
        console.log('test ran');
    }, [openLT] )

    const mapa = () => {
        setOpenLT(true);
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

    const constable = () => {
        setOpenLT(true);
        setLTText("Constable Bogoff: Do you liek Sponegbob memes?")
    }  

    const barkeep = () => {
        setOpenLT(true);
        setLTText("Barkeep Swanson: Weird folk about. Strange things happening in our quiet town.")
    } 

    const removeLT = () => setOpenLT(false);

    return (
        <>
        { openLT ? (<LowerThird ltText={ltText} ltAvatar={ltAvatar} />) : (null)} 
        <img alt="backgroundImage" onClick={removeLT} src={backdrop}></img>
        <div className="hitbox mapa" onClick={mapa}></div>
        <div className="hitbox farmers" onClick={farmers}></div>
        <div className="hitbox bronwyn" onClick={bronwyn}></div>
        <div className="hitbox constable" onClick={constable}></div>
        <div className="hitbox barkeep" onClick={barkeep}></div>
        </>
    )
}

export default Inn;