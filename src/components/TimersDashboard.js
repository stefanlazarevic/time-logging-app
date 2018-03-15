import React from 'react';
import EditableTimersList from './EditableTimersList';
import TogglebleTimersForm from './TogglebleTimersForm';
import data from '../timersdata';
import _ from '../helper';

// This is the root application component that holds all the data.
export default class TimersDashboard extends React.Component {

    constructor() {
        super();

        this.state = {
            timers: [],
        };

        this.getId = _.pluck('id').bind(this);
    }

    componentDidMount() {
        this.setState({
            timers: data,
        });
    }

    render() {
        return (
            <div>
                <EditableTimersList timers={this.state.timers} />
                <TogglebleTimersForm inEditForm={false}/>
            </div>
        );
    }
}
