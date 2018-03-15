import React from 'react';
import EditableTimersList from './EditableTimersList';
import TogglebleTimersForm from './TogglebleTimersForm';
import data from '../timersdata';
import _ from '../helper';
import style from './TimersDashboard.css';

// This is the root application component that holds all the data.
export default class TimersDashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            timers: [],
        };

        this.getId = _.pluck('id').bind(this);

        this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
        this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
    }

    // React component lifecycle methods.
    componentDidMount() {
        this.setState({ timers: data });
    }

    // Dashboard event handlers.
    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    handleEditFormSubmit = (timer) => {
        this.updateTimer(timer);
    }

    handleDeleteClick = (timerId) => {
        this.deleteTimer(timerId);
    };

    handleStartClick = (timerId) => {
        this.startTimer(timerId);
    };

    handleStopClick = (timerId) => {
        this.stopTimer(timerId);
    };

    /**
     * Create new timer object and add to timers list.
     * @param {object} timerData
     */
    createTimer(timerData) {
        const id = this.state.timers.length;
        this.setState({
            timers: this.state.timers.concat(Object.assign({}, timerData, {
                id,
                title: timerData.title || 'Title',
                project: timerData.project || 'Project',
                time: {
                    start: null,
                    elapsed: 0,
                },
            }))
        });
    }

    /**
     * Update existing timer.
     * @param {object} timerData
     */
    updateTimer(timerData) {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (this.getId(timer) === this.getId(timerData)) {
                    return Object.assign({}, timer, {
                        id: this.getId(timerData),
                        title: timerData.title,
                        project: timerData.project,
                    });
                }

                return timer;
            })
        });
    }

    /**
     * Remove timer from timers list.
     * @param {string} timerId
     */
    deleteTimer(timerId) {
        this.setState({
            timers: this.state.timers.filter(timer => {
                if (this.getId(timer) !== timerId) {
                    return timer;
                }
            }),
        })
    }

    /**
     * Start timer.
     * @param {string} timerId
     */
    startTimer(timerId) {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (this.getId(timer) === timerId) {
                    return Object.assign({}, timer, {
                        time: {
                            runningSince: now,
                            elapsed: timer.time.elapsed,
                        }
                    });
                }

                return timer;
            })
        });
    }

    /**
     * Stop timer.
     * @param {string} timerId
     */
    stopTimer(timerId) {
        const now = Date.now();

        this.setState({
            timers: this.state.timers.map(timer => {
                if (this.getId(timer) === timerId) {
                    const lastElapsed = now - timer.time.runningSince;

                    return Object.assign({}, timer, {
                        time: {
                            elapsed: timer.time.elapsed + lastElapsed,
                            runningSince: null,
                        }
                    });
                }

                return timer;
            })
        });
    }

    render() {
        return (
            <div className="timer__dashboard">
                <EditableTimersList
                    timers={this.state.timers}
                    onFormSubmit={this.handleEditFormSubmit}
                    onDeleteClick={this.handleDeleteClick}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
                <TogglebleTimersForm
                    onFormSubmit={this.handleCreateFormSubmit}
                />
            </div>
        );
    }
}
