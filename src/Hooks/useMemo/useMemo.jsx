import React from "react";
import {Helmet} from "react-helmet";

const useMemo = () => {
    return (
        <>
            <Helmet>
                <title>Use Memo</title>
            </Helmet>
            <h1 className="homePageContainer">Use Memo</h1>
        </>
    );
}

export default useMemo;