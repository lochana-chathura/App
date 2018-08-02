import uuid from 'uuid';
import database from '../firebase/firebase';
import axios from 'axios';

// ADD_PROJECT
export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const startAddProject = (projectData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      description = '',
      cost = '',
      note = '',
      createdAt = 0
    } = projectData;
    const project = { name, description, cost, note, createdAt };
    var body = {
      "ProjectName": name,
      "ProjectDescription": description,
      "ProjectCost": cost,
      "ProjectNote": note,
      "ProjectCreatedAt": createdAt
    }
    axios.post('http://localhost:55300/api/projects', body)
      .then(response => {
        //console.log(response.data);
        dispatch(addProject({
          id: response.data.projectId,
          ...project
        }))
      })
      .catch((error) => {
        //debugger;
        console.log(error);
      });

  };
}


// REMOVE_PROJECT
export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id
});

export const startRemoveProject = ({id}) => {
  return (dispatch) => {
    //console.log(props,`http://localhost:55300/api/projects/${id}`,"LOG")
    axios.delete(`http://localhost:55300/api/projects/${id}`)
    .then(response => {
      console.log(response.data);
      dispatch(removeProject(id))
    })
    .catch((error) => {
      //debugger;
      console.log(error);
    });
  };
};


// EDIT_PROJECT
export const editProject = (id, updates) => ({
  type: 'EDIT_PROJECT',
  id,
  updates
});

// export const startEditProject = (id,updates) => {
//   return (dispatch) => {
//     //console.log(props,`http://localhost:55300/api/projects`,"LOG")
//     // console.log(id,updates,"RRR");
//     // console.log("RRR");
//     // dispatch(editProject(id,updates));
//     // axios.put(`http://localhost:55300/api/projects`)
//     // .then(response => {
//     //   console.log(response.data);
//     //   dispatch(editProject(id))
//     // })
//     // .catch((error) => {
//     //   //debugger;
//     //   console.log(error);
//     // });
//   };
// };

//SET_PROJECTS
export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const startSetProjects = () => {
  return (dispatch) => {
    axios.get(`http://localhost:55300/api/projects`)
      .then(res => {
        let projectsArray = res.data;
        projectsArray = projectsArray.map((project) => {
          return {
            id:project.projectId,
            name: project.ProjectName,
            description: project.ProjectDescription,
            cost: project.ProjectCost,
            note: project.ProjectNote,
            createdAt: project.ProjectCreatedAt
          }
        })
        dispatch(setProjects(projectsArray));
      })
  };
};
 
