const fetch = require("node-fetch");

const BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

const getPhotosByAlbum = async (req, res) => {
    const { id } = req.params;
    const url = `${BASE_URL}/${id}/photos`;

    fetch(url)
      .then(response => response.json())
      .then(data => res.status(200).send(data));
}

module.exports = {
    getPhotosByAlbum
}
