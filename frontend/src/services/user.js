import api from './api'

// Criar usuário
export const createUser = async (payload) => {
    try {
        const response = await api.post('/user', payload);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const auth = async (payload) => {
    try {
        const response = await api.post('/login', payload);
        localStorage.setItem('token', response.data.token);
        return response.data.token;
    } catch (error) {
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

        const response = await api.get(`/list-user?search=${param}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};