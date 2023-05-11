import React from "react";
import "./UseRefStyle.css";
import Helmet from "react-helmet";

/*
What is useRef Hook?
Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause re-render when updated. It can be used to access a DOM element directly.
*/

const UseRef = () => {
    const [value, setValue] = React.useState("Raja");
    const refElement = React.useRef("");
    // console.log(refElement);

    const refFun = () => {
        setValue("");
        refElement.current.focus();
    }

    return (
        <>
            <Helmet>
                <title>Use Ref</title>
            </Helmet>
            <h1 className="useRefHeading">Use Ref</h1>
            <div className="useRefContainer">
                <input className="useRefInputField" ref={refElement} value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} placeholder="Enter the value"/>
                <button onClick={refFun} className="useRefResetBtn">Reset</button>
            </div>
        </>
    );
}

export default UseRef;