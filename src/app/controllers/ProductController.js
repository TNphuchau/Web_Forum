class ProductController {
    // [GET] / Product
    product(req, res, next) {
        res.render('product');
    }
}
module.exports = new ProductController();
