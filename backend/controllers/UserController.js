const bcrypt = require('bcryptjs');
const { getUsers, addUser } = require('../storage');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send('Nome, E-mail e senha são campos obrigatórios');
    }

    // Criptografar senha
    const hashPassword = await bcrypt.hash(password, 10);
    addUser({ name, email, password: hashPassword });
    res.status(200).send('Usuário registrado com sucesso');
};

const listUser = (req, res) => {
    const search = req.query.search;
    const users = getUsers();
    const user = users.find(u => u.name === search || u.email === search);

    if (!user) {
        return res.status(404).send('Nenhum usuário encontrado');
    }

    res.json({
        name: user.name,
        email: user.email
    });
};

module.exports = {
    registerUser,
    listUser
};
