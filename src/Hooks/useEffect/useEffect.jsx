import React, {useState, useEffect} from "react";
import {Helmet} from "react-helmet";
import './useEffectStyle.css'

const useEffectPage = () => {
    const [size, setSize] = useState(window.screen.width);

    const currentWindowSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', currentWindowSize);
        return () => (window.removeEventListener("resize", currentWindowSize));
    });

    return (
        <>
            <Helmet>
                <title>Use Effect</title>
            </Helmet>
            <h1 className="effectHeader">The Size of the window is <span className="ueSpan">{size}</span>
            </h1>
        </>
    );
}

export default useEffectPage;