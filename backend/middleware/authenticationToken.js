const jwt = require('jsonwebtoken');
const JWT_SECRET = '004faf95675a1802516044fbafa4990bd9d87b8c7f6bcb56655a295b9e576e273f6c06ca8a2daf84'

const authenticationToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = authenticationToken;