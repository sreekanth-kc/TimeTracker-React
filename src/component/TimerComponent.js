import React, { Component } from 'react';

export default class TimerComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRunning: false,
			prevTime: props.initialTime || 0 ,
			time: 0
		}

	}
	
	getUnits = (ms) => {
		let seconds = ms / 1000;
		const hours = parseInt( seconds / 3600 ); 
		seconds = seconds % 3600;
		const minutes = parseInt( seconds / 60 );
		seconds = seconds % 60;
		return {
			hh: Math.floor(hours),
			mm: Math.floor(minutes),
			ss: Math.floor(seconds),
		};
	};

	startTimer = () => {
		this.props.setCurrentTimer(this.props.id);
		const startTime = Date.now();
		this.timer = setInterval(() => {
			const delta = Date.now() - startTime;
			const time = delta  + this.state.prevTime;
			this.setState({ time: time, isRunning: true });
		}, 10)
	}

	stopTimer = () => {
		clearInterval(this.timer);
		this.setState({ prevTime: this.state.time, isRunning: false });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentRunningTimer !== nextProps.id) {
			this.stopTimer()
		} else if(!this.timer){
			this.startTimer()
		}
		if(nextProps.initialTime !== this.props.initialTime){
			this.setState({prevTime: nextProps.initialTime})
			this.startTimer()
		}
		
	}
	
	componentDidMount() {
		if (this.props.currentRunningTimer === this.props.id) {
			this.startTimer();
		}
	}
	
	editTimerComponent = () =>{
		this.stopTimer();
		this.props.editTime({id: this.props.id, time: this.getUnits(this.state.time), project: this.props.project, task: this.props.task})
	}

	render() {
		const time = this.getUnits(this.state.time);
		return (
			<React.Fragment>
				<tr>
					<td>
						{this.props.project}
					</td>
					<td>
						{this.props.task}
					</td>
					<td>
						HH : {time.hh}
					</td>
					<td>
						MM : {time.mm}
					</td>
					<td>
						SS : {time.ss}
					</td>
					<td>
						<button onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>
					</td>
					<td>
						<button onClick={this.stopTimer} disabled={!this.state.isRunning}>Stop</button>
					</td>
					<td>
						<button onClick={this.editTimerComponent} >Edit</button>
					</td>
				</tr>
			</React.Fragment>
		);

	}
}