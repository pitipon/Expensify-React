import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarFocused: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        // Dispatch start Date
        this.props.dispatch(
            setStartDate(startDate)
        )

        // Dispatch end Date
        this.props.dispatch(
            setEndDate(endDate)
        )

    }

    render() {

        return (
            <div className="content-container">
                <div className="input-group">
                    {/* FILTER INPUT */}
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            className="text-input"
                            placeholder="Seach by keyword"
                            value={this.props.filter.text} 
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                    {/* SORT BY SELECTION */}
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filter.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate());
                                } else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount());
                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    {/* DATE PICKER */}
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
                            startDateId="calendar_start_date" // PropTypes.string.isRequired,
                            endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
                            endDateId="calendar_end_date" // PropTypes.string.isRequired,
                            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={calendarFocused => this.setState({ calendarFocused })} // PropTypes.func.isRequired,
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                        />
                    </div>
                </div>
      
            </div>
        )
    }
}


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

