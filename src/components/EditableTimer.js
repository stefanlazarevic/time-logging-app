import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inEditForm: this.props.inEditForm
        }

        this.toggleEditState = this.toggleEditState.bind(this);
        this.handleUpdateTimer = this.handleUpdateTimer.bind(this);
    }

    toggleEditState() {
        this.setState({
            inEditForm: !this.state.inEditForm,
        });
    }

    handleUpdateTimer(timerData) {
        this.props.onFormSubmit(timerData);
        this.toggleEditState();
    }

    render() {
        if (this.state.inEditForm) {
            return (
                <TimerForm id={this.props.id}
                           title={this.props.title}
                           project={this.props.project}
                           time={this.props.time}
                           submitText={'Update'}
                           toggleEditState={this.toggleEditState}
                           onFormSubmit={this.handleUpdateTimer}
                />
            );
        }

        return (
            <Timer title={this.props.title}
                   id={this.props.id}
                   project={this.props.project}
                   time={this.props.time}
                   toggleEditState={this.toggleEditState}
                   onDeleteClick={this.props.onDeleteClick}
                   onStartClick={this.props.onStartClick}
                   onStopClick={this.props.onStopClick}
            />
        );
    }
}
