import React, { useState } from 'react';
import { searchUser } from '../services/user';

const UserPage = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await searchUser(search);
            setUser(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    };

    return (
        <div>
            <h3>Buscar Usuário</h3>
            <input type="text" placeholder="Buscar por email, nome ou CPF" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {user && (
                <div>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>CPF: {user.cpf}</p>
                </div>
            )}
        </div>
    );
};

export default UserPage;
