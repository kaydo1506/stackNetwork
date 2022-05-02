import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostItem from './PostItem';
import Spinner from '../layout/Spinner';
import Alert from '../layout/Alert';
import PostForm from './PostForm';
import ScrollButton from './ScrollToTop';

const Posts = () => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);

    const { posts, loading } = post;

    useEffect(() => {
        dispatch(getPosts());
    }, [getPosts]);
    return (
        <div className='container'>
            <Alert />
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h1 className='large text-primary'>Posts</h1>
                    <p className='lead'>
                        <i className='fas fa-user'></i>
                        Welcome to the community
                    </p>
                    <div className='posts'>
                        {[...posts].reverse().map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                    </div>
                    <PostForm />
                    <ScrollButton />
                </Fragment>
            )}
        </div>
    );
};

export default Posts;
