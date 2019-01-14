import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        let expense = props.expense;

        this.state = {
            description: expense ? expense.description : '',
            note: expense ? expense.note : '',
            amount: expense ? expense.amount : '',
            createdAt: expense ? moment(expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state equal to 'Please provide description and amount'
            this.setState({ error: 'Please provide description and amount'});
        } else {
            
            console.log('Submit!!')
            // Trigger onSubmit to dispatch expense
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })

            // Reset value
            this.setState({ 
                description: '',
                amount: '',
                note: '',
                createdAt: moment(),
                error:'' 
            });
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.error && (
                        <p>{this.state.error}</p>
                    )
                }
                <form onSubmit={this.onSubmit}>
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;