const bcrypt = require('bcryptjs');
const { getUsers, addUser } = require('../storage');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send('Nome, E-mail e senha são campos obrigatórios.');
    }

    const users = getUsers()
    const userUsed = users?.find(u => u.email === email) || null;

    if (userUsed) {
        return res.status(400).send('E-mail já registrado.');
    }

    // Criptografar senha
    const hashPassword = await bcrypt.hash(password, 10);
    addUser({ name, email, password: hashPassword });
    res.status(200).send('Usuário registrado com sucesso.');
};

const listUser = (req, res) => {
    const search = req.query.search?.toLowerCase();
    const users = getUsers();
    const usersReturn = users?.filter(u => 
        u.name.toLowerCase().includes(search) || 
        u.email.toLowerCase().includes(search)
    );

    if (!usersReturn || usersReturn.length === 0) {
        console.error('Nenhum usuário encontrado.')
        return res.status(404).send('Nenhum usuário encontrado.');
    }

    res.json(usersReturn);
};

module.exports = {
    registerUser,
    listUser
};
