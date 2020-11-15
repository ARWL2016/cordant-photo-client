const fetch = require("node-fetch");

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async (req, res) => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => res.status(200).send(data));
}

const getUsersAlbums = async (req, res) => {
    const { id } = req.params;
    const url = `${BASE_URL}/${id}/albums`;

    fetch(url)
      .then(response => response.json())
      .then(data => res.status(200).send(data));
}

module.exports = {
    getUsers, getUsersAlbums
}