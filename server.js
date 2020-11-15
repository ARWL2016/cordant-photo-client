const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const path = require('path');
const setRoutes = require('./api/routes/index');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist/cordant-photo-client')));

setRoutes(app);

app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'dist/cordant-photo-client/index.html'));
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(chalk.green(`[quizzical-server] listening on port: ${port}`));
});
