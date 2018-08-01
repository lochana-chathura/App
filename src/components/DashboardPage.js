import React, { Component } from 'react';
import ProjectList from './ProjectList';
import ProjectForm3 from './ProjectForm3';
import ProjectForm4 from './ProjectForm4';
import { connect } from 'react-redux';
import { startAddProject } from '../actions/projects';
import { editProject } from '../actions/projects';
//import axios from 'axios';


class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.handleAddShow = this.handleAddShow.bind(this);
        this.handleEditShow = this.handleEditShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            type: undefined,
            project:undefined
        };
    }
    handleAddShow() {
        this.setState(()=>{
            return { 
                show: true, 
                type: "add",
                project:undefined
            };
        });
    }
    handleEditShow(project) {
        this.setState(()=>{
            return { 
                show: true, 
                type: "edit",
                project: project
            };
        });
    }
    handleClose() {
        this.setState({ show: false });
    }

    componentDidMount() {

    //     axios.get(`http://localhost:55300/api/projects/1`)
    //   .then(res => {
    //     const persons = res.data;
    //     console.log(persons,"DATA");})
     }
    
    render() {
        return (
            <div className="container">
                DashboardPage
            <ProjectList handleAddShow={this.handleAddShow} handleEditShow={this.handleEditShow} handleClose={this.handleClose} />
                <ProjectForm3
                    show={this.state.show}
                    type={this.state.type}
                    handleClose={this.handleClose}
                    onSubmit={(project) => {
                        if (this.state.type==="add"){
                            this.props.dispatch(startAddProject(project));
                        }else if (this.state.type ==="edit"){
                            this.props.dispatch(editProject(this.state.project.id,project));
                        }
                        this.props.history.push('/');
                    }}
                    //onSubmit={(values)=>console.log(values)}
                    project={this.state.project}
                    />
            </div>
        )
    }
}

export default connect()(DashboardPage);