import React, {useEffect, useState} from "react";
import "../App.css";
import CountUp from "react-countup";


const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Home (${count})`;
    }, [count]);

    return (
        <>
            <div className="homePageContainer">
                <div className="container">
                    <button className="minusBtn btn" onClick={() => {
                        count === 0 ? setCount(0) : setCount(count - 2);
                    }}>-
                    </button>
                    <h1 className="countValue"><CountUp className="counter" start={0} end={count} duration={4}/>
                    </h1>
                    <button className="addBtn btn" onClick={() => {
                        setCount(count + 2);
                    }}>+
                    </button>
                </div>
                <button className="resetBtn btn" onClick={() => {
                    setCount(0);
                }}>Reset
                </button>
            </div>
        </>
    );
}

export default Home;