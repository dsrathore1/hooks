import React from "react";
import Parent from "./Parent";
import Helmet from "react-helmet";

const Child = () => {
    return (
        <>
            <Helmet>
                <title>Props</title>
            </Helmet>
            <Parent LastName="Sins" age={23} fontSize={"50px"}/>
        </>
    );
}

export default Child;