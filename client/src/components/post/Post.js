import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Alert from '../layout/Alert';

const Post = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const setPost = useSelector((state) => state.post);

    const { post, loading } = setPost;

    useEffect(() => {
        dispatch(getPost(params.id));
    }, [getPost]);

    return loading || post === null ? (
        <Spinner />
    ) : (
        <div className='container'>
            <Alert />
            <Link to='/posts' className='btn'>
                Back To Posts
            </Link>
            <PostItem post={post} showActions={false} />
            <div className='comments'>
                <CommentForm postId={post._id} />
                {post.comments.map((comment) => (
                    <CommentItem
                        key={comment._id}
                        comment={comment}
                        postId={post._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Post;
