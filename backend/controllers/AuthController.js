const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUsers } = require('../storage');
const JWT_SECRET = '004faf95675a1802516044fbafa4990bd9d87b8c7f6bcb56655a295b9e576e273f6c06ca8a2daf84'

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(404).send('Usuário não encontrado.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Senha incorreta!');
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '6h' });
    res.json({ token });
};

module.exports = {
    loginUser
};
