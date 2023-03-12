import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

import Home from "./Home/Home";
import Nav from "./Home/Nav";
import UseStatePage from "./Hooks/useState/useState.jsx";
import UseEffectPage from "./Hooks/useEffect/useEffect.jsx";
import UseContextPage from "./Hooks/useContext/useContext.jsx";
import UseMemoPage from "./Hooks/useMemo/useMemo.jsx";
import UseNavigatePage from "./Hooks/useNavigate/UseNavigate";
import SendDataPage from "./Hooks/useNavigate/sendDataPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/useState" element={<UseStatePage/>}/>
                    <Route path="/useEffect" element={<UseEffectPage/>}/>
                    <Route path="/useContext" element={<UseContextPage/>}/>
                    <Route path="/useMemo" element={<UseMemoPage/>}/>
                    <Route path="/useNavigate" element={<UseNavigatePage/>}/>
                    <Route path="/sendData" element={<SendDataPage/>}/>
                </Routes>
            </Router>
        </div>);
}

export default App;
