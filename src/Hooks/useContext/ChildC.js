import React, {useState} from "react";

import NoteContext from "./noteContext";
import UseContextPage from "./useContext.jsx";

const ChildC = () => {
    const s1 = {
        "name": "Digpal",
        "age": 24
    }
    const [state, setState] = useState(s1);
    const handleChange = () => {
        setTimeout(() => {
            setState({
                "name": "John",
                "age": 21
            });
        }, 1000);
    }
    return (
        <>
            <h1>Hello I am child C</h1>
            <NoteContext.Provider value={{state, handleChange}}>
                <UseContextPage/>
            </NoteContext.Provider>
        </>
    );
}

export default ChildC;
