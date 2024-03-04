const User = require('../models/User');

class UserController {
    //Get [Login]
    renderLoginForm(req, res, next) {
        res.render('users/login', { layout: 'default' });
    }

    //Post [Login]
    login(req, res, next) {
        const { username, password } = req.body;

        User.findOne({ username })
            .then((user) => {
                if (!user) {
                    return res.status(401).send('Invalid username or password');
                }

                return user.comparePassword(password).then((match) => {
                    if (!match) {
                        return res.status(401).send('Invalid username or password');
                    }

                    req.session.user = user;
                    res.redirect('/');
                });
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error logging in user');
            });
    }

    //Get [Register]
    renderRegisterForm(req, res, next) {
        res.render('users/register', { layout: 'default' });
    }

    //Post [Register]
    register(req, res, next) {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).send('Missing required fields');
        }

        const user = new User({ name, username, email, password });

        user
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {
                console.error(err);
                res.status(500).send('Error registering user');
            });
    }
}

module.exports = new UserController();