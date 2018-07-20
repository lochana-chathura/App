import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import { Button } from 'semantic-ui-react';
//import { Button} from 'react-bootstrap';

class ProjectList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div className='project-list-header'>
                    <h1>Project List</h1>
                    <Button className='main-button' onClick={this.props.handleAddShow}>Add New Project</Button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td><b>Name</b></td>
                            <td><b>Description</b></td>
                            <td><b>Cost</b></td>
                            <td><b>Note</b></td>
                            <td><b>Created At</b></td>
                            <td><b>Actions</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.projects.map((project) => {
                            return <ProjectListItem key={project.id} handleEditShow={this.props.handleEditShow} handleClose={this.props.handleClose} {...project} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};
const ConnectedProjectList = connect(mapStateToProps)(ProjectList);
export default ConnectedProjectList;