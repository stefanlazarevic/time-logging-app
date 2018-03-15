import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inEditForm: this.props.inEditForm
        }

        this.toggleEditForm = this.toggleEditForm.bind(this);
    }

    toggleEditForm() {
        this.setState({
            inEditForm: !this.state.inEditForm,
        });
    }

    render() {
        if (this.state.inEditForm) {
            return (
                <TimerForm id={this.props.id}
                           title={this.props.title}
                           project={this.props.project}
                           time={this.props.time}
                           submitText={'Update'}
                           toggleEditForm={this.toggleEditForm}
                />
            );
        }

        return (
            <Timer title={this.props.title}
                   project={this.props.project}
                   time={this.props.time}
                   toggleEditForm={this.toggleEditForm}
            />
        );
    }
}
