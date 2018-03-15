import React from 'react';

export default class TimerActionButton extends React.Component {


    render() {
        if (this.props.timerIsRunning) {
            return <button type="button" className="btn btn-default" onClick={this.props.onStopClick}>Stop</button>
        }

        return <button type="button" className="btn btn-default" onClick={this.props.onStartClick}>Start</button>
    }
}
