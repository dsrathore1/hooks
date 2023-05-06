import React, {createContext} from "react";
import A from "./A";
import "./ContextStyle.css";
import Helmet from "react-helmet";

/*
What is useContext?
Ans:- useContext hook is to create a common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.

Three main "key points" to remember in useContext
    1. Create
    2. Provider
    3. useContext


*/

const data = createContext();
const data1 = createContext();
const Main = () => {


    let name = "Yogesh";
    let age = 23;
    return (<>
        <Helmet>
            <title>Use Context</title>
        </Helmet>
        <div className="mainContextContainer">
            <data.Provider value={name}>
                <data1.Provider value={age}>
                    <A/>
                </data1.Provider>
            </data.Provider>
        </div>
    </>)
}


export default Main;
export {data, data1};