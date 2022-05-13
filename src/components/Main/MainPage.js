import React from 'react';

import RadioButton from '../Constants/RadioButton';
import SelectBox from '../Constants/SelectBox';
import StartTestButton from './StartTestButton';

import '../../assets/css/Main/mainPage.css';

const MainPage = () => {
    return (
        <div className="main_page_container">
            <div className="main_page_items">
                <div className="radio_container">
                    <span className="selection_name">Test Type</span>
                    <RadioButton name="test_selection" items={ ['Upload File', 'XSS', 'SQL Injection'] } checked="Upload File"/>
                </div>
                <input id="url_input" type="text" name="url_selection" placeholder="Enter the URL"></input>
                <div className="radio_container">
                    <span className="selection_name">Option1</span>
                    <RadioButton name="option1_selection" items={ ['Option 1-1', 'Option 1-2', 'Option 1-3'] } checked="Option 1-1"/>
                </div>
                <div className="radio_container">
                    <span className="selection_name">Option2</span>
                    <RadioButton name="option2_selection" items={ ['Option 2-1', 'Option 2-2'] } checked="Option 2-1"/>
                </div>
                <div className="select_box_container">
                    <span className="selection_name">Option3</span>
                    <SelectBox name="option3_selection" items={ ['Option 3-1', 'Option 3-2', 'Option 3-3', 'Option 3-4'] }/>
                </div>
                <StartTestButton/>
            </div>
        </div>
    )
}

export default MainPage;