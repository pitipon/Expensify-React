import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    // Snapshot before click submit
    expect(wrapper).toMatchSnapshot();
    // Click Submit button
    wrapper.find('form').simulate('submit', { preventDefault: () => {}});
    // Expect error
    let error = wrapper.renderer._newState.error;
    expect(error.length).toBeGreaterThan(0);
    // Snapshot after click submit
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    let value = "new description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value }});
    let description = wrapper.renderer._newState.description;
    expect(description).toBe(value);
})

test('should set note on textarea change', () => {
    let value = "new note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value }});
    let note = wrapper.renderer._newState.note;
    expect(note).toBe(value);
})

test('should set amount if valid value', () => {
    let value = "43.20";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value }});
    let amount = wrapper.renderer._newState.amount;
    expect(amount).toBe(value);
})
