const { deleteUser } = require("../controllers/UserController/deleteUser");
const { getUser } = require("../controllers/UserController/getUser");
const { postUser } = require("../controllers/UserController/postUser");
const { updateUser } = require("../controllers/UserController/updateUser");
const loginUser = require("../controllers/UserController/loginUser");
const getUserByID = require("../controllers/UserController/getUserById");

const postUserHandler = async (req, res) => {
    try {
        const user = await postUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const loginUserHandler = async (req, res) => {
    try {
        const user = await loginUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserHandler = async (req, res) => {
    try {
        const allUser = await getUser()
        res.status(200).json(allUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getUserByIDHandler = async (req, res) => {
    try {
        const userById = await getUserByID(req.params)
        res.status(200).json(userById)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUser(id);

        res.status(200).send("User  has deleted💥💥")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUserHandler = async (req, res) => {
    try {
        const user = await updateUser(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}




module.exports = {
    postUserHandler,
    getUserHandler,
    getUserByIDHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
}