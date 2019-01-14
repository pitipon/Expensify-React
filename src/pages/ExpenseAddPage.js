import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

const ExpenseAddPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">   
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
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
    </div>
)

// Enhance component with redux
const ConnectedExpenseAddPage = connect()(ExpenseAddPage)

export default ConnectedExpenseAddPage;