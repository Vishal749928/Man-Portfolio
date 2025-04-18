var mysql = require("mysql");
var util = require("util");
var conn = mysql.createConnection({
    "host":"bp3dem61jnomijigpzuz-mysql.services.clever-cloud.com",
    "user":"usq6fgesjhndg5hr",
    "password":"RKl05qPcZE4P3uMrzuTe",
    "database":"bp3dem61jnomijigpzuz"

});

var exe = util.promisify(conn.query).bind(conn);


module.exports = exe;
