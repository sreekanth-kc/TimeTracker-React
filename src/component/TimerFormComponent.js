import React, { Component } from 'react';
import Popup from "reactjs-popup";
import "./style.css";

export default class TimerFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: '',
			task: '',
			hh: "0",
			mm: "0",
			ss: "0",
		}
	}

	submitForm = () => {
		const { project, task, hh, mm, ss } = this.state

		if (project && task && hh && mm && ss) {
			this.props.addTimer({ project, task, hh, mm, ss });
			this.setState({
				project: '',
				task: '',
				hh: "0",
				mm: "0",
				ss: "0",
			});
		} else {
			alert('Enter Project, Task , Time');
		}
	}
	submitForm = () => {
		const { project, task, hh, mm, ss } = this.state

		if (project && task && hh && mm && ss) {
			this.props.addTimer({ project, task, hh, mm, ss });
			this.setState({
				project: '',
				task: '',
				hh: "0",
				mm: "0",
				ss: "0",
			});
		} else {
			alert('Enter Project, Task , Time');
		}
	}

	updateForm = () => {
		const { id, project, task, hh, mm, ss } = this.state

		if (project && task && hh && mm && ss) {
			this.props.updateTimer({ id, project, task, hh, mm, ss });
			this.setState({
				project: '',
				task: '',
				hh: "0",
				mm: "0",
				ss: "0",
			});
		} else {
			alert('Enter Project, Task , Time');
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			id: nextProps.editInfo.id,
			project: nextProps.editInfo.project || '',
			task: nextProps.editInfo.task || '',
			hh: nextProps.editInfo.hh || "0",
			mm: nextProps.editInfo.mm || "0",
			ss: nextProps.editInfo.ss || "0",
		})
	}

	render() {
		return (
			<Popup className="custom-popup" trigger={<button> Create</button>} position="right center">
    		<div>
				<h1>Form</h1>
				<div className="row">
					<label htmlFor="project">Project Name</label>
					<input name="project" placeholder="Enter Project Name" type="text" value={this.state.project} onChange={(event) => { this.setState({ project: event.target.value }) }}></input>
				</div>
				<div className="row">
					<label htmlFor="task">Task Name</label>
					<input name="task" placeholder="Enter Task name" type="text" value={this.state.task} onChange={(event) => { this.setState({ task: event.target.value }) }}></input>
				</div>
				<div className="row">
					<label htmlFor="time">Time</label>
					<input name="hour" className="time" placeholder="HH" type="text" value={this.state.hh} onChange={(event) => { this.setState({ hh: event.target.value }) }}></input>
					<input name="min" className="time" placeholder="MM" type="text" value={this.state.mm} onChange={(event) => { this.setState({ mm: event.target.value }) }}></input>
					<input name="sec" className="time" placeholder="SS" type="text" value={this.state.ss} onChange={(event) => { this.setState({ ss: event.target.value }) }}></input>
				</div>
				<div className="row">
				{
					!this.props.editFlag ?
						<button onClick={this.submitForm} > Add Item </button> :
						<button onClick={this.updateForm}> Save Item </button>
				}
				</div>
			</div>
  </Popup>
			
		)
	}
}