const userRouter = require('./user-router');
const albumRouter = require('./album-router');

module.exports = (app) => {
    app.use('/users', userRouter);
    app.use('/albums', albumRouter);
}
