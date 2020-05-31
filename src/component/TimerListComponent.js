import React, { Component } from 'react';
import TimerComponent from './TimerComponent';
import TimerFormComponent from './TimerFormComponent';

export default class TimerListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [

			],
			currentRunningTimer: null,
			editInfo: {
			}
		}

	}

	convertToMilliseconds = ({ hh, mm, ss }) => {
		return (((hh * 60 * 60) + (mm * 60) + ss) * 1000);
	}

	addTimer = ({ project, task, hh, mm, ss }) => {
		this.setState({
			list: [...this.state.list,
			{
				id: this.state.list.length + 1,
				project: project,
				task: task,
				initialTime: this.convertToMilliseconds({
					hh: parseInt(hh),
					mm: parseInt(mm),
					ss: parseInt(ss)
				})
			},
			], 
			currentRunningTimer: this.state.list.length + 1,
			editFlag: false
			
		})

	}
	
	updateTimer = ({ id, project, task, hh, mm, ss }) => {
		const list = [...this.state.list];
		const listItemIndex = list.findIndex((item)=> item.id === id);
		list.splice(listItemIndex,1,{ ...list[listItemIndex], id, project, task, initialTime: this.convertToMilliseconds({
			hh: parseInt(hh),
			mm: parseInt(mm),
			ss: parseInt(ss)
		})})
		this.setState({
			list: list, currentRunningTimer: id , editInfo: {}, editFlag: false
		})

	}

	setCurrentTimer = (currentTimer) => {
		this.setState({ currentRunningTimer: currentTimer })
	}

	editTime = ({ id, time, project, task }) => {
		const { hh, mm, ss } = time;
		this.setState({ editInfo: { id, project, task, hh, mm, ss }, editFlag : true });
	}
	

render() {
	return (
		<div>
			<h1>List</h1>
			<table>
				<tbody>
					{
						this.state.list.map((timerComponent) => (
							<TimerComponent project={timerComponent.project} task={timerComponent.task} id={timerComponent.id}
								initialTime={timerComponent.initialTime} currentRunningTimer={this.state.currentRunningTimer}
								setCurrentTimer={this.setCurrentTimer} key={timerComponent.id} editTime={this.editTime}
							/>
						))
					}
				</tbody>

			</table>
			<TimerFormComponent addTimer={this.addTimer} updateTimer = {this.updateTimer} editInfo={this.state.editInfo} editFlag={this.state.editFlag}/>
		</div>
	);

}
}