import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilter = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filter.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            value={props.filter.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

// Enchance component with redux
const ConnectedExpenseListFilter = connect(
    mapStateToProps
)(ExpenseListFilter);

export default ConnectedExpenseListFilter;

