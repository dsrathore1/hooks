import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (<>
        <div className="navMainContainer">
            <div className="navLeftColumn">
                <h1 className="navTitle">Hooks</h1>
            </div>
            <div className="navRightColumn">
                <ol className="navLinks">
                    <li><NavLink className="link link1" to="/Hooks/"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}> Home < /NavLink>
                    </li>
                    <li><NavLink className="link link2" to="/Hooks/useState"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        State</NavLink></li>
                    <li><NavLink className="link link3" to="/Hooks/useEffect"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Effect</NavLink></li>
                    <li><NavLink className="link link4" to="/Hooks/useContext"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Context</NavLink></li>
                    <li><NavLink className="link link5" to="/Hooks/useMemo"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Memo</NavLink></li>
                    <li><NavLink className="link link6" to="/Hooks/props"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Props</NavLink>
                    </li>
                </ol>
            </div>
        </div>
    </>);
}

export default Nav;