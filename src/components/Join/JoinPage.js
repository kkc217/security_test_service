import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Join/joinPage.css";

const JoinPage = () => {
    return (
        <>
            <div className="join_page_container">
                <div className="info_container">
                    <span className="info_name">Your name</span>
                    <input id="text_input" className="join_text_input" type="text" name="url_selection"></input>
                </div>
                <div className="info_container">
                    <span className="info_name">Email</span>
                    <input id="text_input" className="join_text_input" type="email" name="url_selection"></input>
                </div>
                <div className="info_container">
                    <span className="info_name">Password</span>
                    <input id="text_input" className="join_text_input" type="password" name="url_selection"></input>
                </div>
                <div className="info_container">
                    <span className="info_name">Re-enter password</span>
                    <input id="text_input" className="join_text_input" type="password" name="url_selection"></input>
                </div>
                <Link to='' className="join_button">JOIN</Link>
            </div>
        </>
    )
}

export default JoinPage;