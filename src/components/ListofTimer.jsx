import React, { Component } from "react";
// import TimerForm from "./CreateTimer";
import TimeRow from "./TimeRow";
import TimerForm from "./TimerForm";
export default class ListofTimer extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          project: "",
          task: "",
          startTime: Date.now(),
          time: "0",
          isRunning: false,
          stopTime: "",
        },
      ],
    };
  }

  startTimer = (index) => {
    alert("+++++++++++++++");
  };

  updateTime = (index) => {
    const currentTimeRow = this.state.list[index];
    if (currentTimeRow.stopTime != "0") {
      currentTimeRow.startTime += 100;
    }
    currentTimeRow.time = Date.now() - currentTimeRow.startTime;
    currentTimeRow.isRunning = true;
    let newList = [...this.state.list];
    newList.splice(index, currentTimeRow);
    this.setState({ list: newList });
  };

  stopTime = (index) => {
    clearInterval(this.interval);
    const currentTimeRow = this.state.list[index];
    currentTimeRow.stopTime = Date.now();
    // currentTimeRow.isRunning = false;
    // let newList = [...this.state.list];
    // newList.splice(index, currentTimeRow);
    // this.setState({ list: newList });
  };

  setTime = (index) => {
    this.interval = setInterval(() => this.updateTime(index), 1000);
  };
  addTimerItem = (newItem) => {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.setState({
      list: [
        ...this.state.list,
        {
          project: newItem.project,
          task: newItem.task,
          startTime: Date.now(),
          time: "",
        },
      ],
    });
  };

  render() {
    const lists = this.state.list.map((item, index) => {
      return (
        <TimeRow
          project={item.project}
          task={item.task}
          time={item.time}
          setTime={this.setTime}
          stopTime={this.stopTime}
          index={index}
          key={index}
        />
      );
    });

    return (
      <div>
        <TimerForm addTime={this.addTimerItem} />
        <table>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}
