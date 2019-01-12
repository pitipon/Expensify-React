import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;