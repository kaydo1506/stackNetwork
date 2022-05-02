import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const { isAuthenticated, loading } = auth;
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/posts'>Posts</Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fas fa-user' />
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li>
                <a
                    onClick={() => {
                        dispatch(logout());
                    }}
                    href='#!'
                >
                    <i className='fas fa-sign-out-alt'> </i>
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fa-solid fa-code'></i> StackNetwork
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

export default Navbar;
