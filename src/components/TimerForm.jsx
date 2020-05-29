import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import Popup from "reactjs-popup";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import "./style.css";

export default class TimerForm extends Component {
  constructor() {
    super();
    this.state = {
      project: "",
      task: "",
      isOpen: false,
    };
  }
  change = (event, key) => {
    this.setState({ [key]: event.target.value });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Popup
        content={<button onClick={this.handleClose}>click to close</button>}
        class="form-popup"
        trigger={<button class="button"> + </button>}
        position="right center"
      >
        <div>
          {/* <label for="cars">Choose a car:</label> */}

          <select
            name="project"
            id="project"
            onChange={(event) => this.change(event, "project")}
          >
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
            <option value="Project 4">Project 4</option>
          </select>

          <select
            name="task"
            id="task"
            onChange={(event) => this.change(event, "task")}
          >
            <option value="Admin">Admin</option>
            <option value="Development">Development</option>
            <option value="Project Management">Project Management</option>
            <option value="QA/UAT">QA/UAT</option>
          </select>
          <button
            class="timer-start-button"
            onClick={(event) =>
              this.props.addTime({
                project: this.state.project,
                task: this.state.task,
              })
            }
          >
            Start Timer
          </button>
          <button class="cancel-button">Cancel</button>
        </div>
      </Popup>
    );
  }
}
