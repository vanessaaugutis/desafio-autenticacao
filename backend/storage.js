let users = [];

const getUsers = () => users;
const addUser = (user) => users.push(user);

module.exports = {
    getUsers,
    addUser
};
