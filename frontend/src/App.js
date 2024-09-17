import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateUserPage from './pages/create-user';
import LoginPage from './pages/login';
import UserPage from './pages/user';

const App = () => {
    const [token, setToken] = useState('');

    // Se já tiver token, permanece logado
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/create-user" element={<CreateUserPage />} />
                <Route 
                    path="/" 
                    element={token ? <Navigate to="/user" /> : <LoginPage setToken={setToken} />} 
                />
                <Route path="/user" element={<UserPage token={token} />} />
            </Routes>
        </Router>
    );
};

export default App;
