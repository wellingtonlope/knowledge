module.exports = app => {
    const {
        save
    } = app.api.user

    app.route('/users')
        .post(save)
}
