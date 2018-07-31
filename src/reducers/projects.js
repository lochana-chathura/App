// Projects Reducer

const projectsReducerDefaultState = [];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        action.project
      ];
    case 'REMOVE_PROJECT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_PROJECT':
      return state.map((project) => {
        if (project.id === action.id) {
          return {
            ...project,
            ...action.updates
          };
        } else {
          return project;
        };
      });
    case 'SET_EXPENSES':
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;