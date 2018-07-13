import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.project ? props.project.name : '',
            description: props.project ? props.project.description : '',
            cost: props.project ? (props.project.cost).toString() : '',
            note: props.project ? props.project.note : '',
            createdAt: props.project ? moment(props.project.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onCostChange = (e) => {
        const cost = e.target.value;

        if (!cost || cost.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ cost }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.description || !this.state.cost) {
            this.setState(() => ({ error: 'Please provide name,description and cost' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                description: this.state.description,
                cost: parseFloat(this.state.cost, 10),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Cost"
                        value={this.state.cost}
                        onChange={this.onCostChange}
                    />
                    <textarea
                        placeholder="Add a note for the project (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <hr />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
