import React, { useState } from 'react';
import { searchUser } from '../services/user';

const UserPage = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false)

    const handleSearch = async () => {
        try {
            const response = await searchUser(search);
            setUser(response);
        } catch (error) {
            setError(true)
        }
    };

    return (
        <div>
            <h3>Buscar Usuário</h3>
            <input type="text" placeholder="Buscar por email, nome ou CPF" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            { error && <span className='error'>Erro ao buscar usuário. Pesquise por um dado existente</span> }
            {user && (
                <div className='container-list'>
                    <p><span>Nome:</span> {user.name}</p>
                    <p><span>Email:</span> {user.email}</p>
                    <p><span>CPF:</span>{user.cpf}</p>
                </div>
            )}
        </div>
    );
};

export default UserPage;
