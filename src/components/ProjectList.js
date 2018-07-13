import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';
import {Link} from 'react-router-dom';

const ProjectList = (props) => (
    <div>
    <div className='project-list-header'>
        <h1>Project List</h1>
        <button className='main-button'><Link to='/menuitem1'>Add New Project</Link></button>
    </div>
        <table>
        <thead>
        <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Cost</td>
            <td>Note</td>            
            <td>Created At</td>
            <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        {props.projects.map((project) => {
            return <ProjectListItem key={project.id} {...project} />
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