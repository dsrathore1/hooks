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
                <Route path="/" element={<Home/>}/>
                <Route path="/useState" element={<UseStatePage/>}/>
                <Route path="/useEffect" element={<UseEffectPage/>}/>
                <Route path="/useContext" element={<UseContextPage/>}/>
                <Route path="/useMemo" element={<UseMemoPage/>}/>
                <Route path="/props" element={<Props/>}/>
            </Routes>
        </Router>
    </div>);
}

export default App;
