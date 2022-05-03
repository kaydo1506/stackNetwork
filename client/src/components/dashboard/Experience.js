import React, { Fragment } from 'react';
import formatDate from '../../utils/formatDate';
import { deleteExperience } from '../../actions/profile';
import { useDispatch } from 'react-redux';

const Experience = ({ experience }) => {
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    const experiences =
        experience &&
        experience.map((exp) => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td className='hide-sm'>{exp.title}</td>
                <td>
                    {formatDate(exp.from)} -{' '}
                    {exp.to ? formatDate(exp.to) : 'Now'}
                </td>
                <td>
                    <button
                        className='btn btn-light'
                        onClick={() => {
                            dispatch(deleteExperience(exp._id));
                        }}
                    >
                        <i className='fa-solid fa-trash-can'></i>
                    </button>
                </td>
            </tr>
        ));
    return (
        <Fragment>
            <h2 className='my-2'>Experience Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    );
};

export default Experience;
