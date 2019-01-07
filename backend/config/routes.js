module.exports = app => {
    const {
        user,
        category
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
}
