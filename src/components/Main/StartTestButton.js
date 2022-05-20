import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Main/startTestButton.css";

const StartTestButton = () => {
    return (
        <>
            <Link to='/result' className="test_button">START</Link>
        </>
    )
}

export default StartTestButton;