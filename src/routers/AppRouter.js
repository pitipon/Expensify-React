import React from 'react';
import { Switch, Router, Route, NavLink } from 'react-router-dom';
import { ExpenseAddPage,
        ExpenseDashboardPage,
        ExpenseEditPage,
        NotFoundPage,
        LoginPage } from '../pages';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={ExpenseAddPage} />
            <PrivateRoute path="/edit/:id" component={ExpenseEditPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter;