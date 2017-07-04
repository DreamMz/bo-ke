module.exports = {
    showIndex(req, res) {
        res.render("index", {
            islogin: req.session.islogin,
            user: req.session.user
        })
    }
}