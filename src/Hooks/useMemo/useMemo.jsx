import React from "react";
import {Helmet} from "react-helmet";
import "./useMemoStyle.css";

/*
What is useMemo Hook?
Ans:- The React useMemo Hook returns a "Memoized Value". Think of memoization as caching a value so that it does not need to be recalculated. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations
*/
const useMemo = () => {

    const [number, setNumber] = React.useState(0);
    const [change, setChange] = React.useState(false);

    const getValue = () => {
        setNumber(number + 1);
    }

    const counter = (num) => {
        for (let i = 0; i <= 100000000; i++) {
        }
        return num;
    }

    const checkedData = React.useMemo(() => {
        return counter(number);
    }, [number])

    return (
        <>
            <Helmet>
                <title>Use Memo</title>
            </Helmet>
            <h1 className="useMomoHeading">Use Memo</h1>
            <div className="functionContainer">
                <button className="numberBtn" onClick={getValue}>Count</button>
                <h1 className="countNumberValue">{checkedData}</h1>

                <button className="textChangeBtn" onClick={() => setChange(!change)}>
                    {change ? "Change" : "Please Change me"}
                </button>
            </div>
        </>
    );
}

export default useMemo
;