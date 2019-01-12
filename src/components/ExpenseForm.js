import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note});
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        // Check number with 2 digit .. ex 334.50
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({amount});
        }
    }

    render() {

        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={ createdAt => this.setState({ createdAt })} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ calendarFocused: focused })} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={ day => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;