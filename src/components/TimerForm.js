import React from 'react';

export default class TimerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || '',
            project: this.props.project || '',
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleProjectChange(event) {
        this.setState({
            project: event.target.value,
        });
    }

    render() {
        return (
            <div className="timer panel panel-default" style={{ maxWidth: 400, margin: "15px auto"}}>
                <div className="timer__header panel-heading">
                    <h3>{this.props.submitText} timer</h3>
                </div>
                <div className="timer__body panel-body">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input id="title" name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="project">Project name:</label>
                        <input id="project" name="project" type="text" className="form-control" value={this.state.project} onChange={this.handleProjectChange}/>
                    </div>
                </div>
                <div className="timer__footer panel-footer text-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default" onClick={this.props.handleUpdateTimer}>{this.props.submitText}</button>
                        <button type="button" className="btn btn-default" onClick={this.props.toggleEditForm}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
