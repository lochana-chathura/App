import { createStore, combineReducers } from 'redux';
import projectReducer from '../reducers/projects'
// Store creation

export default ()=>{
    const store = createStore(
        combineReducers({
          projects: projectReducer
        })
      );
      return store;
};
