import React from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimersList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.timers.map(timer => {
                        return <EditableTimer key={`timer-${timer.id}`}
                                              id={timer.id}
                                              title={timer.title}
                                              project={timer.project}
                                              time={timer.time}
                                              onFormSubmit={this.props.onFormSubmit}
                                              onDeleteClick={this.props.onDeleteClick}
                                              onStartClick={this.props.onStartClick}
                                              onStopClick={this.props.onStopClick}
                                />
                    })
                }

            </div>
        );
    }
}
