import React from 'react';
import { Switch, Router, Route, NavLink } from 'react-router-dom';
import { ExpenseAddPage,
        ExpenseDashboardPage,
        ExpenseEditPage,
        ExpenseHelpPage,
        NotFoundPage,
        LoginPage } from '../pages';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" component={ExpenseAddPage} />
            <Route path="/edit/:id" component={ExpenseEditPage} />
            <Route path="/help" component={ExpenseHelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
)

export default AppRouter;