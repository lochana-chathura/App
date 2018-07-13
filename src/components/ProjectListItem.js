import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeProject} from '../actions/projects';

const ProjectListItem = ({ dispatch,id,name, description,cost,note,createdAt }) => (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{cost}</td>
      <td>{note}</td>
      <td>{createdAt}</td>
      <td>
      <div className="a">
        <button className="edit-button"><Link to={`/edit/${id}`}>EDIT</Link></button>
        <button className="remove-button" 
        onClick={()=>{
          dispatch(removeProject({id}));
        }}
        >REMOVE</button>
      </div>
      </td>
    </tr>
);

export default connect()(ProjectListItem);
