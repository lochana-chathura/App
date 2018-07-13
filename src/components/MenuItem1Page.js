import React from 'react';
import {connect} from 'react-redux';
import ProjectForm from './ProjectForm';
import {addProject} from '../actions/projects';

const MenuItem1Page = (props) => (
    <div>
        <h1>Add Project</h1>
        <ProjectForm
            onSubmit={(project)=>{
                props.dispatch(addProject(project));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(MenuItem1Page);