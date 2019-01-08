const admin = require('./admin')

module.exports = app => {
    const {
        user,
        category,
        article,
        auth
    } = app.api

    const {
        authenticate
    } = app.config.passport

    app.post('/signup', user.save)
    app.post('/signin', auth.signin)
    app.post('/validateToken', auth.validateToken)

    app.route('/users')
        .all(authenticate())
        .post(admin(user.save))
        .get(admin(user.get))

    app.route('/users/:id')
        .all(authenticate())
        .put(admin(user.save))
        .get(admin(user.getById))

    app.route('/categories')
        .all(authenticate())
        .get(admin(category.get))
        .post(admin(category.save))

    //Cuidado com a ordem! tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .all(authenticate())
        .get(category.getTree)

    app.route('/categories/:id')
        .all(authenticate())
        .get(category.getById)
        .put(admin(category.save))
        .delete(admin(category.remove))

    app.route('/articles')
        .all(authenticate())
        .get(admin(article.get))
        .post(admin(article.save))

    app.route('/articles/:id')
        .all(authenticate())
        .get(article.getById)
        .put(admin(article.save))
        .delete(admin(article.remove))

    app.route('/categories/:id/articles')
        .all(authenticate())
        .get(article.getByCategory)
}
