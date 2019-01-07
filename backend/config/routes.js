module.exports = app => {
    const {
        user
    } = app.api

    app.route('/users')
        .post(user.save)
        .get(user.get)

    app.route('/users/:id')
        .put(user.save)
        .get(user.getById)
}
