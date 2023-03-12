import React, {useContext, useEffect} from "react";
import {Helmet} from "react-helmet";
import "./useContextStyle.css";
import NoteContext from "./noteContext";

//! Always Remember :- 1. Create Context    2. Provide    3. useContext

const useContextPage = () => {
    const value = useContext(NoteContext);
    useEffect(() => {
        return () => {
            value.handleChange();
        };
    }, [value]);


    return (
        <>
            <Helmet>
                <title>Use Context</title>
            </Helmet>
            <div className="mainContainer">
                <h1 className="contextPageTitle">My name is <span>{value.state}</span></h1>
            </div>
        </>
    );
}

export default useContextPage
;
