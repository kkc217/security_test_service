import React from 'react';
import RadioButton from '../Constants/RadioButton';
import SelectBox from '../Constants/SelectBox';
import StartTestButton from './StartTestButton';

const Colors = [
    { name: 'RED', hex: '#ffb598' },
    { name: 'ORANGE', hex: '#ffdcaa' },
    { name: 'PURPLE', hex: '#d7beff' },
    { name: 'CYAN', hex: '#c7f5ed' },
    { name: 'BLUE', hex: '#c2dbff' },
];

const MainPage = () => {
    return (
        <>  
            <div className="radio_container">
                점검 유형
                <RadioButton name="test_selection" items={ ['파일 업로드', 'XSS', 'SQL Injection'] } checked="파일 업로드"/>
            </div>
            <input type="text" name="url_selection" placeholder="URL을 입력해주세요."></input>
            <div className="radio_container">
                속성1
                <RadioButton name="option1_selection" items={ ['속성 1-1', '속성 1-2', '속성 1-3'] } checked="속성 1-1"/>
            </div>
            <div className="radio_container">
                속성2
                <RadioButton name="option2_selection" items={ ['속성 2-1', '속성 2-2'] } checked="속성 2-1"/>
            </div>
            <div className="select_box_container">
                속성3
                <SelectBox name="option3_selection" items={ ['속성 3-1', '속성 3-2', '속성 3-3', '속성 3-4'] }/>
            </div>
            <StartTestButton/>
        </>
    )
}

export default MainPage;