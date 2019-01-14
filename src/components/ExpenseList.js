import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expense</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expense</span>
                </div>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem {...expense} key={expense.id}/>            
                ))
            )
            
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