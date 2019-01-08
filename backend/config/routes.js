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
        .post(user.save)
        .get(user.get)

    app.route('/users/:id')
        .all(authenticate())
        .put(user.save)
        .get(user.getById)

    app.route('/categories')
        .all(authenticate())
        .get(category.get)
        .post(category.save)

    //Cuidado com a ordem! tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .all(authenticate())
        .get(category.getTree)

    app.route('/categories/:id')
        .all(authenticate())
        .get(category.getById)
        .put(category.save)
        .delete(category.remove)

    app.route('/articles')
        .all(authenticate())
        .get(article.get)
        .post(article.save)

    app.route('/articles/:id')
        .all(authenticate())
        .get(article.getById)
        .put(article.save)
        .delete(article.remove)

    app.route('/categories/:id/articles')
        .all(authenticate())
        .get(article.getByCategory)
}
