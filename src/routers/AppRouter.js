import React from 'react';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import { ExpenseAddPage,
        ExpenseDashboardPage,
        ExpenseEditPage,
        ExpenseHelpPage,
        NotFoundPage } from '../pages';



const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </header>
)


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={ExpenseAddPage} />
            <Route path="/edit" component={ExpenseEditPage} />
            <Route path="/help" component={ExpenseHelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;