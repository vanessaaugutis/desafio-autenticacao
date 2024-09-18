const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUsers } = require('../storage');

require('dotenv').config();

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (!user) {
        console.error('Usuário não encontrado.');
        return res.status(404).send('Usuário não encontrado.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        console.error('Senha incorreta.')
        return res.status(401).send('Senha incorreta!');
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
    res.json({ token });
};

module.exports = {
    loginUser
};
