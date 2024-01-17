const { User } = require('../../db')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;

const postUser = async ({ name, surname, email, phone, password, address, image }) => {

  if (!(name || email || password)) throw Error("Required data is missing. Please provide name, surname, email, and password.")
  if (password.length < 6 || password.length > 10) throw Error('Password must be between 6 and 10 characters in length.')
  const hashedPassword = await bcrypt.hash(password, 10);
  const [user, created] = await User.findOrCreate({
    where: {
      name: name,
      surname: surname ? surname : null ,
      email: email,
      phone: phone ? phone : null,
      password: hashedPassword,
      image: image ? image : null ,
      address: address ? address : null
    }
  })

  if (!created) throw Error("User with the provided information already exists.")

  const token = jwt.sign({ id: user.id }, JWT_SECRET );

  return { message: `User Created: ${user.name}`, token: token };
}

module.exports = {
  postUser
};


