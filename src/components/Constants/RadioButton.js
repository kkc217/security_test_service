import React, { Component } from "react";

class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectValue: this.props.checked
        }
    }

    handleChange = (e) => {
        this.setState({
          selectValue: e.target.value
        });
    }

    render() {
        return (
            <div className={this.props.name}>
                {this.props.items.map((item, i) => (
                    <React.Fragment key={i}>
                        <input
                            id={item}
                            value={item}
                            className="radio_selection"
                            type="radio"
                            checked={this.state.selectValue === item}
                            onChange={this.handleChange}
                        />
                        {item}
                    </React.Fragment>
                ))}
            </div>
        )
    }
}

export default RadioButton;