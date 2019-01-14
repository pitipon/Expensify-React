import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const ExpenseEditPage = (props) => {
    // console.log(11,props)
    
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container" >
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={ (expense) => {
                        console.log('updated ',expense)

                        // Dispatch editExpense
                        props.dispatch(
                            startEditExpense(props.expense.id, expense)
                        );

                        // Back to Dashboard
                        props.history.push('/');
                    }}
                />
                <button 
                    className="button button--secondary"
                    onClick={() => {
                        console.log('remove', props.expense)
                        // Dispatch startRemoveExpense
                        props.dispatch(startRemoveExpense({id : props.expense.id}))
                        // Back to Dashboard
                        props.history.push('/');
                    }}
                >Remove</button>

            </div>
            
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