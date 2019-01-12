import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilter = (props) => (
    <div>
        <input type="text" value={props.filter.text} onChange={(e) => {
            console.log(e.target.value)
            props.dispatch(setTextFilter(e.target.value))
        }}/>
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

