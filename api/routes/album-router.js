const express = require('express');
const { getPhotosByAlbum } = require('../controllers/albums');

const albumRouter = express.Router();

albumRouter.get('/:id/photos', getPhotosByAlbum)

module.exports = albumRouter;