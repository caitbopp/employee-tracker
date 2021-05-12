const inquirer = require("inquirer");
const { findAllEmployees, employeesByDepartment, employeesByManager } = require("./db/queries");
const db = require("./db/queries");
const connection = require("./db/connection");

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });
// write some inquirer prompts
const runSearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all employees by department',
                'View all employees by manager',
                'Add employee',
                'Remove employee',
                'Update employee role',
                'Update employee manager'
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    findAllEmployees();
                    break;

                case 'View all employees by department':
                    employeesByDepartment();
                    break;

                case 'View all employees by manager':
                    employeesByManager();
                    break;

                case 'Add employee':
                    // addEmployee();
                    break;

                case 'Remove employee':
                    // removeEmployee();
                    break;

                case 'Update employee role':
                    // updateEmployeeRole();
                    break;

                case 'Update employee manager':
                    // updateEmployeeManager();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};

async function viewEmployees () {
    let employees = await db.findAllEmployees();
    console.table(employees);
}

viewEmployees();