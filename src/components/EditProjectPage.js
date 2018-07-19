import React from 'react';
import { connect } from 'react-redux';
import ProjectForm2 from './ProjectForm2';
import { editProject } from '../actions/projects';

const EditProjectPage = (props) => {
    console.log(props)
    return (
        <div>
        <h1>Edit Project</h1>
            <ProjectForm2
                project={props.project}
                onSubmit={(project) => {
                    props.dispatch(editProject(props.project.id,project));
                    props.history.push('/');
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditProjectPage);