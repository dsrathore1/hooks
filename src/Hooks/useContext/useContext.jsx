import React from "react";
import {Helmet} from "react-helmet";

const useContext = () => {
    return (
        <>
            <Helmet>
                <title>Use Context</title>
            </Helmet>
            <h1 className="homePageContainer">Use Context</h1>
        </>
    );
}

export default useContext;