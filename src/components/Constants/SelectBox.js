import React from "react";

const SelectBox = (props) => {
    return (
        <div className={props.name}>
            <select>
                {props.items.map((item, i) => (
                    <React.Fragment key={i}>
                        <option key={item} value={item}>{item}</option>
                    </React.Fragment>
                ))}
            </select>
        </div>
    )
}

export default SelectBox;