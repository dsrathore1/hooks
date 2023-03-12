import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const UseNavigatePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    function pageChange() {
        navigate("/sendData");
    }


    return (
        <>
            <div className="mainContainer">
                <h1> Hi, I am <span>{location.state.id}</span></h1>
                <button className="changeBtn" onClick={pageChange}>Change</button>
            </div>
        </>
    );
}

export default UseNavigatePage;