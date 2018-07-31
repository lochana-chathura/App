import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { Button } from 'semantic-ui-react';
import { Form, Text, TextArea } from 'react-form';
import { Modal } from 'react-bootstrap';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));
export default class ProjectForm3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (!submittedValues.name || !submittedValues.description || !submittedValues.cost) {
            this.setState(() => ({ error: 'Please provide name,description and cost' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                ...submittedValues,
                createdAt: this.state.createdAt.valueOf()
            });
            this.props.handleClose();
        }
        
    }
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.type==="add" ? "ADD NEW PROJECT":"EDIT PROJECT"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.error && <p>{this.state.error}</p>}
                        <Form
                            onSubmit={submittedValues => this.onSubmitClick(submittedValues)} defaultValues={this.props.project}>
                            {(formApi) => (
                                <form onSubmit={formApi.submitForm} id="projectForm" className="projectForm">
                                    <p>
                                        <label htmlFor="projectDetails">Project Details</label>
                                    </p><p>
                                        <label htmlFor="projectName">Name</label>
                                        <Text field="name" id="projectName" className="keyValuePairs" />
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
                                    <p><Button >SUBMIT</Button></p>
                                </form>
                            )}

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
