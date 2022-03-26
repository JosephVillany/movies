const express = require('express');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/user.controller');
const { validateSession } = require('../middlewares/auth.middlewares');
const { protectAccountOwner } = require('../middlewares/movies.middlewares');
const { userExists } = require('../middlewares/users.middleware');

const router = express.Router();

router.post('/login', loginUser);

router.post('/', createUser);

router.use(validateSession)

router.get('/', getAllUsers);


router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(protectAccountOwner, updateUser)
  .delete(protectAccountOwner, deleteUser);


module.exports = { usersRouter: router };
