const util = require("util");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'rootroot',
    database: 'employees',
  });

connection.connect();



connection.query = util.promisify(connection.query);

module.exports = connection;