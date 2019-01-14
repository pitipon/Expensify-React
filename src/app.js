import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
// Redux store
import configStore from './store/config';
// Redux actions
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
// Redux selectors
import getVisibleExpenses from './selectors/expenses';
// style
import 'normalize.css/normalize.css';
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
// Firebase
import { firebase } from './firebase/firebase';


// create redux store
const store = configStore();
console.log(store.getState());

// Subscribe
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(444,visibleExpenses);   
})


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

// AUTH
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in')
    } else {
        console.log('log out')
    }
})