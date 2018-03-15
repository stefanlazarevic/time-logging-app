import React from 'react';
import _ from '../helper';
import TimerActionButton from './TimerActionButton';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
    }

    handleDeleteTimer() {
        this.props.onDeleteClick(this.props.id);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    };

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    render() {
        const time = _.renderElapsedString(this.props.time.elapsed, this.props.time.runningSince);
        return (
            <div className="timer panel panel-default" style={{ maxWidth: 400, margin: "15px auto"}}>
                <div className="timer__header panel-heading text-center">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.project}</h4>
                </div>
                <div className="timer__body panel-body text-center">
                    <time className="timer__time h4">{time}</time>
                </div>
                <div className="timer__footer panel-footer text-center">
                    <div className="btn-group">
                        <TimerActionButton
                            timerIsRunning={!!this.props.time.runningSince}
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick}
                        />
                        <button type="button" className="btn btn-default" onClick={this.props.toggleEditState}>Edit</button>
                        <button type="button" className="btn btn-default" onClick={this.handleDeleteTimer}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}
