import React from "react";

import "../../assets/css/Intro/explanation.css";

const Explanation = () => {
    return (
        <>
            <div className="explanation_container">
                <ul className="explain">
                    <li className="drop_title">
                        <div className="drop_title_name">소개</div>
                    </li>
                    <li className="drop_title">
                        <div className="drop_title_name">테스트 종류</div>
                        <div className="dropdown_content_container">
                            <div className="dropdown_content">Injection</div>
                        </div>
                    </li>
                    <li className="drop_title">
                        <div className="drop_title_name">사용법</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Explanation;