import React from 'react';
import TimerForm from './TimerForm';

export default class TogglebleTimersForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inEditForm: this.props.inEditForm
        };

        this.toggleEditState = this.toggleEditState.bind(this);
        this.handleCreateTimer = this.handleCreateTimer.bind(this);
    }

    toggleEditState() {
        this.setState({
            inEditForm: !this.state.inEditForm,
        });
    }

    handleCreateTimer(newTimer) {
        this.props.onFormSubmit(newTimer);
        this.toggleEditState();
    }

    render() {
        if (this.state.inEditForm) {
            return (
                <TimerForm submitText={'Create'} toggleEditState={this.toggleEditState} onFormSubmit={this.handleCreateTimer}/>
            );
        }

        return (
            <div className="text-center">
                <button className="btn btn-primary" title="Add new timer" style={{width: 400}} onClick={this.toggleEditState}>+</button>
            </div>
        );
    }
}
