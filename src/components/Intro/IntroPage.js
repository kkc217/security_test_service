import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/Intro/introPage.css";

const IntroPage = () => {
    return (
        <>
            <div className="intro_page_container">
                <div className="description_container">
                    Descriptions of our page.
                </div>
                <div className="test_description_container">
                    Test descriptions.
                </div>
                <Link to='/main' className="test_link">Go Test <FontAwesomeIcon icon={faArrowRightLong} /></Link>
            </div>
        </>
    )
}

export default IntroPage;