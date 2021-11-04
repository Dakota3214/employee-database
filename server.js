// npm packages and Port
const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

// Links this file to other files
const display = require("./lib/displayDb");
const add = require("./lib/employeeAdd");
const update = require("./lib/employeeUpdate");
const db = require("./db/mysqlConfigure");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Starts the application and asks the user to select the following options
exports.init = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Please select one of the following options:",
      name: "choices",
      choices: [
        "Display all departments",
        "Display all roles",
        "Display all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee",
        "Exit"
      ]
    })  .then(answers => {
      let choice = answers.choices;
      switch(choice){
        case "Display all departments":
          display.displayDepartments();
          break;
        case "Display all roles":
          display.displayRoles();
          break;
        case "Display all employees":
          display.displayEmployees();
          break;
        case "Add a department":
          add.addDepartment();
          break;
        case "Add a role":
          add.addRole();
          break;
        case "Add an employee":
          add.addEmployee();
          break;
        case "Update an employee":
          update.updateEmployee();
          break;
        case "Exit":
          db.end();
          return;
      }
    })
};

exports.init();







 
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });