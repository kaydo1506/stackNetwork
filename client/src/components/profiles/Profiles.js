import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = () => {
    const setProfile = useSelector((state) => state.profile);

    const { loading, profiles } = setProfile;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfiles());
    }, [getProfiles]);
    console.log(profiles);
    return (
        <div className='container'>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h1 className='large text-primary'>Developers</h1>
                    <p className='lead'>
                        <i className='fab fa-connectdevelop'></i>Browse and
                        connect with developers
                    </p>
                    <div className='profiles'>
                        {profiles.length > 0 ? (
                            profiles.map((profile) => (
                                <ProfileItem
                                    key={profile._id}
                                    profile={profile}
                                />
                            ))
                        ) : (
                            <h4>No profiles found...</h4>
                        )}
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Profiles;
