import React from 'react';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import { ExpenseAddPage,
        ExpenseDashboardPage,
        ExpenseEditPage,
        ExpenseHelpPage,
        NotFoundPage,
        LoginPage } from '../pages';
import Header from '../components/Header';



const AppRouter = () => (
    <BrowserRouter>
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
    </BrowserRouter>
)

export default AppRouter;