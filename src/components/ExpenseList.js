import React from 'react';
import { connect } from 'react-redux';
import { addExpense, editExpense, removeExpense } from '../actions/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filter.text}
        {props.expenses.length}
    </div>
);

const mapStateToProps = (state) => {
    console.log(44, state)
    return {
        expenses: state.expenses,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    addExpense,
    editExpense,
    removeExpense
};

// Enchance component with redux
const ConnectedExpenseList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpenseList);

export default ConnectedExpenseList;