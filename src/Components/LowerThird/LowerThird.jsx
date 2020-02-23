import React from "react";
import "./LowerThird.scss";

const LowerThird = ({ltText, ltAvatar}) => {
    return (
        <div className="ltContainer">
            <div className="avPortraitContainer">
                <img src={ltAvatar} alt="characterAvatar" className="avPortrait"></img>
            </div>
            <div className="textContainer">
                <div className="text">{ltText}</div>
            </div>
        </div>
    )
}

export default LowerThird;