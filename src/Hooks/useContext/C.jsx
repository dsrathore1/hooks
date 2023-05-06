import React from "react";
import {data, data1} from "./main";

const C = () => {
    const name = React.useContext(data);
    const age = React.useContext(data1);
    return (
        <>
            <div className="cContainer">
                <h1>Hello my name is {name} and my Age is {age}</h1>
                <h3 style={{textAlign: "center", marginTop:"1rem"}}>I'm called from child C</h3>
            </div>
        </>
    );
}


export default C;