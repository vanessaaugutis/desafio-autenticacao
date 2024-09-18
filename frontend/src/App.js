import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUserPage from './pages/create-user';
import LoginPage from './pages/login';
import UserPage from './pages/user';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <Router>
            <Routes>
                <Route path="/create-user" element={<CreateUserPage />} />
                <Route 
                    path="/" 
                    element={<LoginPage setToken={setToken} />} 
                />
                <Route path="/user" element={<UserPage token={token} />} />
            </Routes>
        </Router>
    );
};

export default App;
