import React, { Component } from "react";

// const RadioButton = (props) => {
//     return (
//         <div></div>
//     )
// }

class RadioButton extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        console.log(`*****handleChange*****`);
        console.log(`선택한 값 : ${e.target.value}`);

        this.setState({
            selectValue: e.target.value
        });
    };

    render() {
        console.log(`*****render*****`);
        console.log(`this.state.selectValue : ${this.state.selectValue}`);

        return (
            <div className="App">
            {this.state.selectList.map((value, i) => (
                <React.Fragment key={i}>
                <input
                    id={value}
                    value={value}
                    name="platform"
                    type="radio"
                    checked={this.state.selectValue === value}
                    onChange={this.handleChange}
                />
                {value}
                </React.Fragment>
            ))}
            </div>
        );
    }
}

export default RadioButton;



// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       selectList: ["Windows", "Mac", "Linux"],
//       selectValue: "Mac"
//     };
//   }

//   handleChange = (e) => {
//     console.log(`*****handleChange*****`);
//     console.log(`선택한 값 : ${e.target.value}`);

//     this.setState({
//       selectValue: e.target.value
//     });
//   };

//   render() {
//     console.log(`*****render*****`);
//     console.log(`this.state.selectValue : ${this.state.selectValue}`);

//     return (
//       <div className="App">
//         {this.state.selectList.map((value, i) => (
//           <React.Fragment key={i}>
//             <input
//               id={value}
//               value={value}
//               name="platform"
//               type="radio"
//               checked={this.state.selectValue === value}
//               onChange={this.handleChange}
//             />
//             {value}
//           </React.Fragment>
//         ))}
//       </div>
//     );
//   }
// }
