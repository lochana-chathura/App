import './App.css';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addProject } from './actions/projects';

import {Provider} from 'react-redux'

const store=configureStore();

store.dispatch(addProject({ name: 'Mi-Wifi', description:'description1',note:'note1',cost:'1000' }));
store.dispatch(addProject({ name:'Smart Lamp Controller' ,description: 'description2',note:'note2',cost:'1500' }));
store.dispatch(addProject({ name: 'Under Water Robot', description:'description3',note:'note3',cost:'500' }));
setTimeout(()=>{
    store.dispatch(addProject({name:'QMS', description:'Quota management system',note:'note4',cost:'500'}));
},3000);
const state = store.getState();
console.log(state);

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

export default jsx;
