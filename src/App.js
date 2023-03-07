import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

import Home from "./Home/Home";
import Props from "./Props/Child";
import Nav from "./Home/Nav";
import UseStatePage from "./Hooks/useState/useState";
import UseEffectPage from "./Hooks/useEffect/useEffect.jsx";
import UseContextPage from "./Hooks/useContext/useContext";
import UseMemoPage from "./Hooks/useMemo/useMemo";

function App() {
    return (<div className="App">
        <Router>
            <Nav/>
            <Routes>
                <Route path="/Hooks/" element={<Home/>}/>
                <Route path="/Hooks/useState" element={<UseStatePage/>}/>
                <Route path="/Hooks/useEffect" element={<UseEffectPage/>}/>
                <Route path="/Hooks/useContext" element={<UseContextPage/>}/>
                <Route path="/Hooks/useMemo" element={<UseMemoPage/>}/>
                <Route path="/Hooks/props" element={<Props/>}/>
            </Routes>
        </Router>
    </div>);
}

export default App;
