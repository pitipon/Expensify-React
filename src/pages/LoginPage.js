import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1>Rappen</h1>
            <p className="page-header__title">Simply to record your expenses</p>
            <br></br>
            <button className="button" onClick={startLogin}>Login with Google Account</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

const ConnectLoginPage = connect(undefined, mapDispatchToProps)(LoginPage);

export default ConnectLoginPage;