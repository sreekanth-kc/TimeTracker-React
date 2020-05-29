import React, { Component } from "react";
import Popup from "Popup";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

class Popups extends Component {
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
        <h1> Simple Popup Example In React Application </h1>
        <button onClick={this.togglePopup.bind(this)}>
          {" "}
          Click To Launch Popup
        </button>

        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Popups;
