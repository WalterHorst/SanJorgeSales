const { User } = require('../../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;

const loginUser = async ({ name, password }) => {
    const findUser = await User.findOne({ where: { name } })
    if (!findUser) throw Error("User not found.")
    const { id } = findUser.dataValues;
    const validatePass = await bcrypt.compare(password, findUser.dataValues.password)
    if (!validatePass) throw Error("Invalid password. Please check your password and try again.")
    const token = jwt.sign({ id, name }, JWT_SECRET)
    return ({idUser: id, token})
}

module.exports = loginUser;