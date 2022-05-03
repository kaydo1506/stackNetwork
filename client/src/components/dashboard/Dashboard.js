import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import Alert from '../layout/Alert';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';


const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [getCurrentProfile]);

    const auth = useSelector((state) => state.auth);
    const setProfile = useSelector((state) => state.profile);

    const { user } = auth;
    const { loading, profile } = setProfile;

    return (
        <div className='container'>
            <Alert />
            {loading && profile === null ? (
                <Spinner />
            ) : (
                <div>
                    <h1 className='large text-primary'>Dashboard</h1>
                    <p className='lead'>
                        <i className='fas fa-user'></i> Welcome{' '}
                        {user && user.name}
                    </p>
                    {profile !== null ? (
                        <Fragment>
                            <DashboardActions />
                            <Experience experience={profile.experience} />
                            <Education education={profile.education} />
                            <div className='my-2'>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => {
                                        dispatch(deleteAccount());
                                    }}
                                >
                                    <i className='fas fa-user-minus'>
                                        {' '}
                                        Delete My Account
                                    </i>
                                </button>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <p>
                                You have not yet setup a profile, please add
                                some info
                            </p>{' '}
                            <Link
                                to='/create-profile'
                                className='btn btn-primary my-1'
                            >
                                Create Profile
                            </Link>
                        </Fragment>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
