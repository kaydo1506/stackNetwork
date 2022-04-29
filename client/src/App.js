import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { Provider } from 'react-redux';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';
import store from './store';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />

                    <Routes>
                        <Route exact path='/' element={<Landing />} />
                        <Route exact path='/register' element={<Register />} />
                        <Route exact path='/login' element={<Login />} />

                        <Route exact path='/profiles' element={<Profiles />} />

                        <Route element={<PrivateRoute />}>
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route
                                path='/create-profile'
                                element={<CreateProfile />}
                            />
                            <Route
                                path='/edit-profile'
                                element={<EditProfile />}
                            />
                            <Route
                                path='/add-experience'
                                element={<AddExperience />}
                            />

                            <Route
                                path='/add-education'
                                element={<AddEducation />}
                            />
                        </Route>

                        <Route
                            path='*'
                            element={
                                <main className='container'>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
