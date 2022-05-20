import React from "react";

import "../../assets/css/Result/resultPage.css";

const ResultPage = () => {
    return (
        <>
            <div className="result_page_container">
                <h1>RESULT</h1>
                <table className="result_props_table">
                    <tr>
                        <td className="result_prop_text">URL</td>
                        <td>https://www.aaa.bbbb</td>
                    </tr>
                    <tr>
                        <td className="result_prop_text">Test Type</td>
                        <td>SQL Injection</td>
                    </tr>
                    <tr>
                        <td className="result_prop_text">security level</td>
                        <td>https://www.aaa.bbbb</td>
                    </tr>
                </table>
                <br/><br/>
                <div className="details_container">
                    <span className="result_prop_text" id="details_prop">Details</span>
                    <div className="details_box">
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultPage;