import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Alert from '../layout/Alert';

const Register = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            dispatch(setAlert('Passwords do not match', 'danger'));
        } else {
            dispatch(register({ name, email, password }));
        }
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
                <h1 className='large text-primary'>Sign Up</h1>
                <p className='lead'>
                    <i className='fa fa-user'></i> Create Your Account
                </p>
                <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            required
                            value={name}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            required
                            value={email}
                            onChange={onChange}
                        />
                        <small className='form-text'>
                            This site uses Gravatar so if you want a profile
                            image, use a Gravatar email
                        </small>
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
                    <div className='form-group'>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name='password2'
                            minLength='6'
                            required
                            value={password2}
                            onChange={onChange}
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary'
                        value='Register'
                    />
                </form>
                <p className='my-1'>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>
            </div>
        </Fragment>
    );
};

export default Register;
