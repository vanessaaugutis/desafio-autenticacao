import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Criar usuário
export const createUser = async (payload) => {
    try {
        const response = await api.post('/user', payload);
        console.log(response)
        return response.data;
    } catch (error) {
        alert('Erro ao criar usuário');
        throw error;
    }
};

export const auth = async (payload) => {
    try {
        const response = await api.post('/login', payload);
        localStorage.setItem('token', response.data.token);
        return response.data.token;
    } catch (error) {
        alert('Erro ao fazer login');
        throw error;
    }
};

export const searchUser = async (param) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('Usuário sem autorização de acesso');
            return;
        }

        console.log(token)

        const response = await api.get(`/list-user?search=${param}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        alert('Erro ao buscar usuário');
        throw error;
    }
};