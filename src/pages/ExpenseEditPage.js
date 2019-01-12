import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const ExpenseEditPage = (props) => {
    // console.log(11,props)
    
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={ (expense) => {
                    console.log('updated ',expense)

                    // Dispatch editExpense
                    props.dispatch(
                        editExpense(props.expense.id, expense)
                    );

                    // Back to Dashboard
                    props.history.push('/');
                }}
            />
            <button 
                onClick={() => {
                    // Dispatch removeExpense
                    props.dispatch(removeExpense({id : props.expense.id}))
                    // Back to Dashboard
                    props.history.push('/');
                }}
            >Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    // console.log(555, state)
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    }
}

// Enchance component with redux
const ConnectedExpenseEditPage = connect(
    mapStateToProps
)(ExpenseEditPage)

export default ConnectedExpenseEditPage;