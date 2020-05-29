import React, { Component } from "react";
import Popup from "./components/Popup";
import Stopwatch from "./components/StopWatch";
import "./components/style.css";
import TimerForm from "./components/TimerForm";
import ListofTimer from "./components/ListofTimer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    return (
      <div>
        <ListofTimer />
        {/* <TimerForm /> */}
        {/* <Stopwatch /> */}
        {/* <button class="button" onClick={this.togglePopup.bind(this)}>
          {" "}
          +
        </button>

        {this.state.showPopup ? (
          <Popup text="" closePopup={this.togglePopup.bind(this)} />
        ) : null} */}
      </div>
    );
  }
}
