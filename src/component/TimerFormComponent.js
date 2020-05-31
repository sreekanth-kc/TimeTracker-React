import React, { Component } from 'react';

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
			<div>
				<h1>Form</h1>
				<label htmlFor="project">Project Name</label>
				<input name="project" placeholder="Enter Project Name" type="text" value={this.state.project} onChange={(event) => { this.setState({ project: event.target.value }) }}></input>
				<label htmlFor="task">Task Name</label>
				<input name="task" placeholder="Enter Task name" type="text" value={this.state.task} onChange={(event) => { this.setState({ task: event.target.value }) }}></input>

				<input name="hour" placeholder="HH" type="text" value={this.state.hh} onChange={(event) => { this.setState({ hh: event.target.value }) }}></input>
				<input name="task" placeholder="MM" type="text" value={this.state.mm} onChange={(event) => { this.setState({ mm: event.target.value }) }}></input>
				<input name="task" placeholder="SS" type="text" value={this.state.ss} onChange={(event) => { this.setState({ ss: event.target.value }) }}></input>
				{
					!this.props.editFlag ?
						<button onClick={this.submitForm} > Add Item </button> :
						<button onClick={this.updateForm}> Save Item </button>
				}
			</div>
		)
	}
}