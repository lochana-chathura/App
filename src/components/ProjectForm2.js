import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { Button } from 'semantic-ui-react';
import { Form, Text, TextArea } from 'react-form';

const now = moment();
console.log(now.format('MMM Do, YYYY'));
export default class ProjectForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.project ? props.project.name : '',
            description: props.project ? props.project.description : '',
            cost: props.project ? (props.project.cost).toString() : '',
            note: props.project ? props.project.note : '',
            createdAt: props.project ? moment(props.project.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        };
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmitClick = (submittedValues) => {
        console.log(submittedValues)
        if (!submittedValues.name || !submittedValues.description || !submittedValues.cost) {
            this.setState(() => ({ error: 'Please provide name,description and cost' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                ...submittedValues,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <Form
                    onSubmit={submittedValues => this.onSubmitClick(submittedValues)} defaultValues={this.state}>
                    {(formApi) => (
                        <form onSubmit={formApi.submitForm} id="projectForm" className="projectForm">
                            <p>
                                <label htmlFor="projectDetails">Project Details</label>
                            </p><p>
                                <label htmlFor="projectName">Name</label>
                                <Text field="name" id="projectName" className="keyValuePairs"/>
                            </p><p>
                                <label htmlFor="projectDescription">Description</label>
                                <Text field="description" id="projectDescription" className="keyValuePairs" />
                            </p><p>
                                <label htmlFor="projectCost">Cost</label>
                                <Text field="cost" id="projectCost" className="keyValuePairs" />
                            </p><p>
                                <label htmlFor="projectNote">Note</label>
                                <TextArea field="note" id="projectNote" placeholder="This field is optional" className="keyValuePairs" />
                            </p>
                            <label htmlFor="projectCreatedAt">Created At</label>
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                            <p><Button primary>SUBMIT</Button></p>
                        </form>
                    )}

                </Form>
            </div>
        )
    }
}
