// Links server.js, mysqlConfigure and console.table npm to this file
const db = require("../db/mysqlConfigure");
const consoleTable = require("console.table");
const server = require("../server");



// Displays all Departments
exports.displayDepartments = () => {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            console.table(rows);
            server.init();
        }
    });
};

//Display all Roles
exports.displayRoles = () => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            console.table(rows);
            server.init();
        }
    });
};

//Display all Employees
exports.displayEmployees = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            console.table(rows);
            server.init();
        }
    });
};