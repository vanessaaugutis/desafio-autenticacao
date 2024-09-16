import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/user';

const LoginPage = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth({ email, password });
            setToken(response);
            navigate('/user')
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div>
            <h3>Login</h3>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="button" onClick={handleSubmit}>Entrar</button>
            <button type="button" onClick={() => navigate('/create-user')}>Cadastrar</button>
        </div>
    );
};

export default LoginPage;
