import React, {useState} from 'react';
import '../../App.css';
import {Helmet} from "react-helmet";
import '../useState/useStateStyle.css';

const useStatePage = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        mobileNumber: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm((prev) => {
            return {...prev, [name]: value};
        });
    };

    return (
        <>
            <Helmet>
                <title>Use State</title>
            </Helmet>
            <div className="mainFormContainer">
                <form className="useStateMainContainer">
                    <h1 className="formTitle">Register</h1>
                    <input className="usernameInput ip" type="text" placeholder="Username" name="username"
                           value={form.username} onChange={handleInput} required/>
                    <input className="emailInput ip" type="email" placeholder="Email" name="email" value={form.email}
                           onChange={handleInput} required/>
                    <input className="numInput ip" type="number" placeholder="Mobile Number" name="mobileNumber"
                           value={form.mobileNumber} onChange={handleInput}
                           required/>
                    <input className="passwordInput ip" type="password" placeholder="Password" name="password"
                           value={form.password} onChange={handleInput} required/>
                    <button className="formBtn" type="submit">Submit</button>
                </form>
                <p className="textValue">My name is {form.username}, my email id {form.email} and mobile
                    number {form.mobileNumber}</p>
            </div>
        </>
    )
}

export default useStatePage;