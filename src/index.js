import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import jsx from './App'
import 'semantic-ui-css/semantic.min.css';
import ProjectForm3 from './components/ProjectForm3';

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
