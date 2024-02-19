class HomeController {
    // [GET] / home
    home(req, res, next) {
        res.render('home');
    }
}
module.exports = new HomeController();
