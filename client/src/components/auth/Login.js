import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(login({ email, password }));
    };

    // Redirect if loged in
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) {
        return <Navigate replace to='/dashboard' />;
    }

    return (
        <Fragment>
            <div className='container'>
                <Alert />
                <h1 className='large text-primary'>Sign In</h1>
                <p className='lead'>
                    <i className='fa fa-user'></i> Sign Into Your Account
                </p>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            required
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            minLength='6'
                            required
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <input
                        type='submit'
                        className='btn btn-primary'
                        value='Login'
                    />
                </form>
                <p className='my-1'>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </div>
        </Fragment>
    );
};

export default Login;
