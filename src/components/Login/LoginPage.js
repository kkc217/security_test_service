import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Login/loginPage.css";

const LoginPage = () => {
    return (
        <>
            <div className="login_container">
                <div className="login_input_container">
                    <div className="input_container">
                        <input id="text_input" className="text_input" type="text" name="url_selection" placeholder="ID"></input>
                        <input id="text_input" className="text_input" type="password" name="url_selection" placeholder="Password"></input>
                    </div>
                    <Link to='' className="login_button">LOGIN</Link>
                </div>
            </div>
        </>
    )
}

export default LoginPage;