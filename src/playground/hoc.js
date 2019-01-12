// Higher Order Component

import React from 'react';
import ReactDOM from 'react-dom';

const InfoComponent = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => (props) => (
    <div>
        <p>This is private info. Please dont share!</p>
        <WrappedComponent {...props}/>
    </div>
)

const AdminInfo = withAdminWarning(InfoComponent);

ReactDOM.render(<AdminInfo info="There are the details"/>, document.getElementById('app'));