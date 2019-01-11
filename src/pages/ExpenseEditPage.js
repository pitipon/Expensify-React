import React from 'react';

const ExpenseEditPage = (props) => {
    console.log(props)
    
    return (
    <div>
        Edit id {props.match.params.id}
    </div>
)}

export default ExpenseEditPage;