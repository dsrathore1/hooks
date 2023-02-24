import React, {useEffect, useState} from "react";
import "../App.css";


const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Home (${count})`;
    }, [count]);

    return (
        <>
            <div className="homePageContainer">
                <div className="container">
                    <button className="addBtn btn" onClick={() => {
                        setCount(count + 1)
                    }}>+
                    </button>
                    <h1 className="countValue">{count}</h1>
                    <button className="minusBtn btn" onClick={() => {
                        count === 0 ? setCount(0) : setCount(count - 1);
                    }}>-
                    </button>
                </div>
                <button className="resetBtn btn" onClick={() => {
                    setCount(0)
                }}>Reset
                </button>
            </div>
        </>
    );
}

export default Home;