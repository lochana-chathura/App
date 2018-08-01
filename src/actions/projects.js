import uuid from 'uuid';
import database from '../firebase/firebase';
import axios from 'axios';

// ADD_PROJECT
export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const startAddProject=(projectData={})=>{
  return (dispatch)=>{
    const {
      name='',
      description = '',
      cost='',
      note='',
      createdAt=0
    }=projectData;
    const project ={ name,description,cost,note,createdAt};
    database.ref('projects').push(project).then((ref)=>{
      dispatch(addProject({
        id:ref.key,
        ...project
      }))
    });
    
  };
}
// REMOVE_PROJECT
export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id
});

// EDIT_PROJECT
export const editProject = (id, updates) => ({
  type: 'EDIT_PROJECT',
  id,
  updates
});

//SET_PROJECTS
export const setProjects=(projects)=>({
  type:'SET_PROJECTS',
  projects
});

// export const startSetProjects=()=>{
//   return (dispatch)=>{
//     axios.get(`http://localhost:55300/api/projects`)
//     .then(res => {
//     const projectsArray = res.data;
//     console.log(persons,"DATA");})
//       return {}
        
//     //   });
//     //   dispatch(setProjects(projects));
//     // });
//   };
// }; 

//     axios.get(`http://localhost:55300/api/projects/1`)
    //   .then(res => {
    //     const persons = res.data;
    //     console.log(persons,"DATA");})

export const startSetProjects=()=>{
  return (dispatch)=>{
    return database.ref('projects').once('value').then((snapshot)=>{
      const projects=[];
      snapshot.forEach((childSnapshot)=>{
        projects.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
        
      });
      dispatch(setProjects(projects));
    });
  };
}; 
