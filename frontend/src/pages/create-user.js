import React, { useState } from 'react';
import { createUser } from '../services/user';
import { useNavigate } from 'react-router-dom';

const CreateUserPage = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createUser({ name, cpf, email, password });
            alert('Usuário criado com sucesso');
        } catch (error) {
            setError(true)
        }
    };

    return (
        <div>
            <h3>Novo usuário</h3>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label>CPF</label>
                <input type="text" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                
                <label>E-mail</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label>Senha</label>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            { error && <span className='error'>Erro ao criar usuário. Verifique os campos e tente novamente.</span>}
            <button type="button" onClick={handleSubmit}>Criar</button>
            <button type="button" onClick={() => navigate('/')}>Voltar</button>
        </div>
    );
};

export default CreateUserPage;
