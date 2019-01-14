import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal}) => {
    const wordExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} expense total {wordExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(99999, state)
    const visibleExpenses = selectExpenses(state.expenses, state.filter);
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }

}

const ConnectExpenseSummary = connect(mapStateToProps)(ExpenseSummary);

export default ConnectExpenseSummary;