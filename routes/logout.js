/**
 * Created by ihor on 30.09.15.
 */
exports.post = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};