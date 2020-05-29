import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
export default class CreateTimer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Form>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Projects</Form.Label>
          <Form.Control as="select">
            <option>Project 1</option>
            <option>Project 2</option>
            <option>Project 3</option>
            <option>Project 4</option>
            <option>Project 5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
          <Form.Label>Select Task</Form.Label>
          <Form.Control as="select">
            <option>Deveopment</option>
            <option>Project Management</option>
            <option>Admin</option>
            <option>QA/UAT</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <div>
          <button className="btn btn-secondary btn-sm">Start Timer</button>
        </div>
        <Button>Cancel</Button>
      </Form>
    );
  }
}
