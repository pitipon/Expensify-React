import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense) => (
                <ExpenseListItem {...expense} key={expense.id}/>            
            ))
        }
    </div>
);

const mapStateToProps = (state) => {
    console.log(44, state)
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    }
}


// Enchance component with redux
const ConnectedExpenseList = connect(
    mapStateToProps
)(ExpenseList);

export default ConnectedExpenseList;