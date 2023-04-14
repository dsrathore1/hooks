import {useNavigate, useLocation} from "react-router-dom";

const SendDataPage = () => {

    const navigate = useNavigate();
    const location = useLocation();


    return (<>
        <div className="mainContainer">
            <h1 className="homePageContainer">Hello my name is {location.state.name}</h1>
            <button className="changeBtn" onClick={() => navigate("/useNavigate")}>Go Back</button>
        </div>
    </>);
}

export default SendDataPage;