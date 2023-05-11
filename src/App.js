import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import { Home, Nav, UseStatePage, UseEffectPage, UseContextPage, UseMemoPage, UseNavigatePage, SendDataPage, UseRefPage } from "./Exports/exports.js";


function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/useState" element={<UseStatePage />} />
                    <Route path="/useEffect" element={<UseEffectPage />} />
                    <Route path="/useContext" element={<UseContextPage />} />
                    <Route path="/useMemo" element={<UseMemoPage />} />
                    <Route path="/useRef" element={<UseRefPage />} />
                    <Route path="/useNavigate" element={<UseNavigatePage />} />
                    <Route path="/sendData" element={<SendDataPage />} />
                </Routes>
            </Router>
        </div>);
}

export default App;
