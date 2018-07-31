import './App.css';
import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {Provider} from 'react-redux'

const store=configureStore();

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

export {jsx,store};
