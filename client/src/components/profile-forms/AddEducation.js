import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        school,
        degree,
        current,
        fieldofstudy,
        from,
        to,
        description,
    } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addEducation(formData, navigate));
    };

    return (
        <div className='container'>
            {' '}
            <h1 className='large text-primary'>Add Your Education</h1>
            <p className='lead'>
                <i className='fas fa-code-branch'></i> Add any school or
                bootcamp that you have attended
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* school or bootcamp'
                        name='school'
                        required
                        onChange={onChange}
                        value={school}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Degree or Certificate'
                        name='degree'
                        required
                        onChange={onChange}
                        value={degree}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Field of Study'
                        name='fieldofstudy'
                        onChange={onChange}
                        value={fieldofstudy}
                    />
                </div>
                <div className='form-group'>
                    <h4>From Date</h4>
                    <input
                        type='date'
                        name='from'
                        onChange={onChange}
                        value={from}
                    />
                </div>
                <div className='form-group'>
                    <p>
                        <input
                            type='checkbox'
                            name='current'
                            checked={current}
                            onChange={(e) => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                            value={current}
                        />{' '}
                        Still Studying
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input
                        type='date'
                        name='to'
                        onChange={onChange}
                        value={to}
                        disabled={toDateDisabled ? 'disabled' : ''}
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='Program Description'
                        onChange={onChange}
                        value={description}
                    ></textarea>
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </div>
    );
};

export default AddEducation;
