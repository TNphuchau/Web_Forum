const homeRouter = require('./home');
const productRouter = require('./product');
const userRouter = require('./user');

function route(app) {
    app.use('/', homeRouter);
    app.use('/product', productRouter);
    app.use('/', userRouter);
}

module.exports = route;
