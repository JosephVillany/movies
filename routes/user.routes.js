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

router.get('/', validateSession, getAllUsers);


router.post('/', createUser);

router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(protectAccountOwner, updateUser)
  .delete(protectAccountOwner, deleteUser);


router.post('/login', loginUser);

module.exports = { usersRouter: router };
