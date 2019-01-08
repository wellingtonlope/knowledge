module.exports = app => {
    const {
        user,
        category,
        article
    } = app.api

    app.route('/users')
        .post(user.save)
        .get(user.get)

    app.route('/users/:id')
        .put(user.save)
        .get(user.getById)

    app.route('/categories')
        .get(category.get)
        .post(category.save)

    //Cuidado com a ordem! tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .get(category.getTree)

    app.route('/categories/:id')
        .get(category.getById)
        .put(category.save)
        .delete(category.remove)

    app.route('/articles')
        .get(article.get)
        .post(article.save)

    app.route('/articles/:id')
        .get(article.getById)
        .put(article.save)
        .delete(article.remove)

    app.route('/categories/:id/articles')
        .get(article.getByCategory)
}
