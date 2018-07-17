import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
const ProjectList = (props) => (
    <div>
    <div className='project-list-header'>
        <h1>Project List</h1>
        <Button className='main-button'><Link to='/menuitem1'>Add New Project</Link></Button>
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
        {props.projects.map((project) => {
            return <ProjectListItem key={project.id} showModal={props.showModal} {...project} />
        })}
        </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};
const ConnectedProjectList = connect(mapStateToProps)(ProjectList);
export default ConnectedProjectList;