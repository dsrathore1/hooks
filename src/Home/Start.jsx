import React from "react";
import "../App.css";
import {useNavigate} from "react-router-dom";


const Start = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="startBtnContainer">
                <button className="startBtn" onClick={() => navigate("/home")}> Let's Start</button>
            </div>
        </>
    )
}

export default Start;