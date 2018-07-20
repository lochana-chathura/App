import React, { Component } from 'react';
import ProjectList from './ProjectList';
import ProjectForm3 from './ProjectForm3';

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }
    handleShow(){
        this.setState({ show: true });
    }
    handleClose(){
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="container">
                DashboardPage
            <ProjectList handleShow={this.handleShow} handleClose={this.handleClose} />
            <ProjectForm3 show={this.state.show} handleClose={this.handleClose} />
            </div>
        )
    }
}

export default DashboardPage;