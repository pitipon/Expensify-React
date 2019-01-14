import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal}) => {
    const wordExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expenses total <span>{wordExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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