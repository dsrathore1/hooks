import {useNavigate} from "react-router-dom";

const SendDataPage = () => {
    const id = 3;
    const navigate = useNavigate();

    function pageChange() {
        navigate("/useNavigate", {state: {id: id}});
    }

    return (<>
        <div className="mainContainer">
            <button className="changeBtn" onClick={pageChange}>Change
            </button>
        </div>
    </>);
}

export default SendDataPage;