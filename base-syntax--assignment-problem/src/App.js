import React, { Component } from 'react';
import './App.css';
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"


class App extends Component {

  state = {
    username: "Spiderman",
    name: ""
  }


  handleChangeInput = (event) => {
    this.setState ({
        username: event.target.value
    })
}
  render() {

    const style = {
      border: "1px solid #eee",
      boxShadow: "0 2px 2px #ccc",
      display: "inline-block",
      width: "200px",
      margin: "10px",
      padding: "20px",
      backgroundColor: "aqua"
    }

    return (
      <div style = {style}>
        <UserInput change={this.handleChangeInput} />
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
