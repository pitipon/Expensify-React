import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const ExpenseAddPage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={ (expense) => {
                console.log(expense);
                // Dispatch addExpense
                props.dispatch(
                    startAddExpense(expense)
                );
                // Change to Dashboard page
                props.history.push('/');
            }}
        />
    </div>
)

// Enhance component with redux
const ConnectedExpenseAddPage = connect()(ExpenseAddPage)

export default ConnectedExpenseAddPage;