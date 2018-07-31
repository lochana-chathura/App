import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import projectReducer from '../reducers/projects'
import thunk from 'redux-thunk';
// Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store = createStore(
        combineReducers({
          projects: projectReducer,
          form: reduxFormReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
      );
      return store;
};

// export default ()=>{
//   const store = createStore(
//       combineReducers({
//         projects: projectReducer,
//         form: reduxFormReducer
//       }),
//       applyMiddleware(thunk)
//       //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
//     return store;
// };