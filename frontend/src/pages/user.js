import React, { useState, useEffect } from 'react';
import { searchUser } from '../services/user';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = async () => {
        try {
            const response = await searchUser(search);
            setUsers(response);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='container-list-search'>
                <h3>Buscar Usuário</h3>
                <input
                    type="text"
                    placeholder="Buscar por nome ou email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
                <button onClick={handleLogout}>Deslogar</button>
                {error && (
                    <span className='error'>
                        Erro ao buscar usuário. Pesquise por um dado existente
                    </span>
                )}
                {users.length > 0 && (
                    <table className='user-table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default UserPage;
