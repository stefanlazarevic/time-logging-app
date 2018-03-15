import React from 'react';
import _ from '../helper';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timer panel panel-default" style={{ maxWidth: 400, margin: "15px auto"}}>
                <div className="timer__header panel-heading text-center">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.project}</h4>
                </div>
                <div className="timer__body panel-body text-center">
                    <time className="timer__time h4">20:02:33</time>
                </div>
                <div className="timer__footer panel-footer text-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default">Start</button>
                        <button type="button" className="btn btn-default" onClick={this.props.toggleEditForm}>Edit</button>
                        <button type="button" className="btn btn-default">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}
