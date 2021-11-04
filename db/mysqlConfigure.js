//Connects npm mysql2
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',



    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '98Avatar!1998',


    
    database: 'employees'
    },

    console.log('Connected to the employees database.'),
  );

module.exports = db;