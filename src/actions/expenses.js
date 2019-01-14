import uuid from 'uuid';
import database from '../firebase/firebase'

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// Expense - Action Generators
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt= 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense)
            .then( ref => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense 
                }));
            })

    }
}

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})



// SET_EXPENSES
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            // console.log(555,snapshot)

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            // console.log(5555,expenses)
            // console.log(66,dispatch)
            dispatch(setExpenses(expenses));
        })
    }
}

module.exports = {
    startAddExpense,
    removeExpense,
    editExpense,
    startSetExpenses
}
