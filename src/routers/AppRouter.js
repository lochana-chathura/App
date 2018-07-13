import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import MenuItem1Page from '../components/MenuItem1Page';
import MenuItem2Page from '../components/MenuItem2Page';
import MenuItem3Page from '../components/MenuItem3Page';
import NotFoundPage from '../components/NotFoundPage';
import AddProjectPage from '../components/AddProjectPage';
import EditProjectPage from '../components/EditProjectPage';
import Header from '../components/Header';
import '../styles/styles.css';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/menuitem1" component={MenuItem1Page} exact={true} />
                <Route path="/menuitem2" component={MenuItem2Page} exact={true} />
                <Route path="/menuitem3" component={MenuItem3Page} exact={true} />
                <Route path="/add" component={AddProjectPage} exact={true} />
                <Route path="/edit/:id" component={EditProjectPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;