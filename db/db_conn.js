var mysql = require('mysql');
var config = require('./db_info').local;

module.exports = function() {
    return {
        init: function() {
            return mysql.create({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            });
        }
    }
};