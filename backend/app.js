const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { loginUser } = require('./controllers/AuthController');
const { listUser, registerUser } = require('./controllers/UserController');

const authenticationToken = require('./middleware/authenticationToken');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/user', registerUser);
app.post('/login', loginUser);
app.get('/list-user', authenticationToken, listUser);

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});