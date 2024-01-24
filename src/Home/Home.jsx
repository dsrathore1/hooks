import {useEffect, useState} from "react";
import "../App.css";
import CountUp from "react-countup";
import {motion} from "framer-motion";


const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Home (${count})`;
    }, [count]);

    return (
        <>
            <motion.div
                initial={{opacity: 0, scaleX: 0}}
                animate={{opacity: 1, scaleX: 1}}
                exit={{opacity: 0, scaleX: 0}}

                className="homePageContainer">
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
            </motion.div>
        </>
    );
}

export default Home;