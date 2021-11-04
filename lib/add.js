// npm packages and file requirements
const db = require("../db/mysqlConfigure");
require("console.table");
const server = require("../server");
const inquirer = require("inquirer");

// Prompts the user for a new department name
exports.addDepartment = () => {
    inquirer    
        .prompt({
            type: "input",
            name: "table",
            message: "What is this new department called?"
        })
        .then(answer => includeNew(answer, `departments`));
};

// function includeNew(data, table) {
//     let sql = "";
//     const params = [];
// }