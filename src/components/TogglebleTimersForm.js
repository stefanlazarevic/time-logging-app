import React from 'react';
import TimerForm from './TimerForm';

export default class TogglebleTimersForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inEditForm: this.props.inEditForm
        };

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
                <TimerForm submitText={'Create'} toggleEditForm={this.toggleEditForm}/>
            );
        }

        return (
            <div className="text-center">
                <button className="btn btn-primary" title="Add new timer" style={{width: 400}} onClick={this.toggleEditForm}>+</button>
            </div>
        );
    }
}
