import React from 'react';
import {connect} from 'react-redux';
import ProjectForm2 from './ProjectForm2';
import {addProject} from '../actions/projects';

const MenuItem1Page = (props) => (
    <div>
        <h1>Add Project</h1>
        <ProjectForm2
            onSubmit={(project)=>{
                props.dispatch(addProject(project));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(MenuItem1Page);