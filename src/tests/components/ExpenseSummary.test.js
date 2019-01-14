import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpensesSummary with zero expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={235333}/>);
    expect(wrapper).toMatchSnapshot();
})