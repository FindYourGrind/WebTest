/**
 * Created by ihor on 30.09.15.
 */
var HttpError = require('error').HttpError;

module.exports = function(req, res, next) {
    if(!req.session.user) {
        return next(new HttpError(401, "Sign in please!"));
    }

    next();
}