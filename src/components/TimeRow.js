import "./style.css";
import React, { Component } from "react";
export default class TimeRow extends Component {
  constructor(props) {
    super(props);
    // setInterval();
  }
  getUnits = () => {
    const seconds = this.props.time / 1000;
    return {
      hour: Math.floor(seconds / 3600).toString(),
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
    };
  };
  render() {
    const { hour, min, sec } = this.getUnits();
    return (
      <table align="center">
        <tbody>
          <tr>
            <td>{this.props.project}</td>
            <td>{this.props.task}</td>
            <td>
              {hour}:{min}:{sec}
            </td>
            <td>
              {" "}
              <button onClick={() => this.props.setTime(this.props.index)}>
                Start{" "}
              </button>
            </td>
            <td>
              {" "}
              <button onClick={() => this.props.stopTime(this.props.index)}>
                Stop{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
