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
                    <li><NavLink className="link link1" to="/dsrathore1.github.io"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}> Home < /NavLink>
                    </li>
                    <li><NavLink className="link link2" to="/useState"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        State</NavLink></li>
                    <li><NavLink className="link link3" to="/useEffect"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Effect</NavLink></li>
                    <li><NavLink className="link link4" to="/useContext"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Context</NavLink></li>
                    <li><NavLink className="link link5" to="/useMemo"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Use
                        Memo</NavLink></li>
                    <li><NavLink className="link link6" to="/props"
                                 style={({isActive}) => ({color: isActive ? "mediumPurple" : "white"})}>Props</NavLink>
                    </li>
                </ol>
            </div>
        </div>
    </>);
}

export default Nav;