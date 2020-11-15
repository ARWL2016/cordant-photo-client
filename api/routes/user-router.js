const express = require('express');
const { getUsers, getUsersAlbums } = require('../controllers/users');

const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id/albums', getUsersAlbums);

module.exports = userRouter;