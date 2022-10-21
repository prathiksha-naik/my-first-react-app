import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserDetails from './UserDetails';

function InitialPage() {
    return (
        <div className="App">
            <h2>Welcome to</h2>
            <h3>My First React App</h3>
            <button className='btn btn-success'>
                <Link to="/userdetails">Show User Details</Link>
            </button>
        </div>
    );
}

export default InitialPage;