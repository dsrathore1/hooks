import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Helmet from 'react-helmet';
import "./useNavigateStyle.css"

const UseNavigatePage = () => {
    const [name, setName] = useState("");

    const navigate = useNavigate();

    function sendData() {
        navigate("/sendData", { state: { name: name } });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (<>
        <Helmet>
            <title>Use Navigate</title>
        </Helmet>

        <div className="mainContainer">
            <form className="navigateForm" onSubmit={handleSubmit}>
                <input className="navigateInput" name="name" placeholder="INPUT" value={name} type="text"
                    onChange={(e) => setName(e.target.value)} />
            </form>
            <button className="changeBtn" type="submit" onClick={sendData}>Change</button>
            <h1>Hello my name is :- {name}</h1>
        </div>
    </>);
}

export default UseNavigatePage;