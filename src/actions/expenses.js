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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt= 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense)
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

const startRemoveExpense = ({ id } = {}) => {
    console.log(id)
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`user/${uid}/expenses/${id}`).remove()
            .then( () => {
                dispatch(removeExpense({ id }));
            })
    }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(33, dispatch)
        return database.ref(`user/${uid}/expenses/${id}`).update(updates)
                    .then(() => {
                        dispatch(editExpense(id, updates));
                    })
    }
}



// SET_EXPENSES
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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
    startRemoveExpense,
    startEditExpense,
    startSetExpenses
}
