class UserController {
    // [GET] / home
    login(req, res, next) {
        res.render('users/login', { layout: 'default' });
    }
    register(req, res, next) {
        res.render('users/register', { layout: 'default' });
    }
}
module.exports = new UserController();
