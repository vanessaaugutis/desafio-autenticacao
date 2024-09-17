const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const authenticationToken = require('./middleware/authenticationToken');

const app = express();
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

// Registro dos usuários
const users = []

app.post('/user', async (req, res) => {
    const { name, cpf, email, password } = req.body;
    if (!name || !cpf || !email || !password) {
        return res.status(400).send('Nome, CPF, E-mail e senha são campos obrigatórios');
    }

    // Criptografar senha
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({ name, cpf, email, password: hashPassword });
    res.status(200).send('Usuário registrado com sucesso');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).send('Usuário não encontrado.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Senha incorreta!');
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
    res.json({ token });
});

app.get('/list-user', authenticationToken, (req, res) => {
    const search = req.query.search;
    let user = null
    users.forEach((u) => {
        if (u.name === search || u.email == search || u.cpf === search) {
            user = {
                name: u.name,
                email: u.email,
                cpf: u.cpf
            }
        }
    })

    if (!user) {
        return res.status(401).send('Nenhum usuário encontrado');
    }

    res.json(user);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});