/**
 * Created by ihor on 28.09.15.
 */
var mongoose = require('./libs/mongoose');
var async = require('async');
var User = require('./models/user').User;

mongoose.connection.on('open', function() {
    var db = mongoose.connection.db;
    db.dropDatabase(function (err) {
        if (err) throw err;

        async.parallel([
            function(callback){
                var vasya = new User({username: 'Vasya', password: 'super'});
                vasya.save(function(err) {
                    callback(err, vasya);
                });
            },
            function(callback){
                var petya = new User({username: 'Petya', password: '123'});
                petya.save(function(err) {
                    callback(err, petya);
                });
            },
            function(callback){
                var admin = new User({username: 'Admin', password: 'admin'});
                admin.save(function(err) {
                    callback(err, admin);
                });
            }
        ], function(err, results) {
            console.log(arguments);
            mongoose.disconnect();
        });
    });
});