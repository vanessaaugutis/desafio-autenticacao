import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/user';

const LoginPage = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false)

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            navigate('/user')
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth({ email, password });
            setToken(response);
            navigate('/user')
        } catch (error) {
            setError(true)
        }
    };

    return (
        <div className='container'>
            <div className='container-login'>
                <h2>LOGIN</h2>
                <p>Bem-Vindo!</p>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                { error && <span className='error'>Erro ao fazer login. Verifique os campos e tente novamente.</span>}
                <button type="button" onClick={handleSubmit}>Entrar</button>
                <button type="button" onClick={() => navigate('/create-user')}>Cadastrar</button>
            </div>
        </div>
    );
};

export default LoginPage;
