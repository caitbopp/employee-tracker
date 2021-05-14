const inquirer = require("inquirer");
// const { findAllEmployees, employeesByDepartment, employeesByManager } = require("./db/queries");
const db = require("./db/queries");
const connection = require("./db/connection");


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
                'View all departments',
                'Add department',
                'Add employee',
                'Remove employee',
                'Update employee role',
                'Update employee manager'
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    viewEmployees();
                    break;

                case 'View all employees by department':
                    viewEmployeesDepartment();
                    break;

                case 'View all employees by manager':
                    viewEmployeesManager();
                    break;

                case 'View all departments':
                    viewDepartment();
                    break;

                case 'Add department':
                    addDepartment();
                    break;

                case 'Add employee':
                    // addEmployee();
                    break;

                // case 'Remove employee':
                //     // removeEmployee();
                //     break;

                case 'Update employee role':
                    // updateEmployeeRole();
                    break;

                // case 'Update employee manager':
                //     // updateEmployeeManager();
                //     break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};

async function viewEmployees() {
    let employees = await db.findAllEmployees();
    console.table(employees);
    runSearch();
};

async function viewEmployeesDepartment() {
    let employees = await db.employeesByDepartment();
    console.table(employees);
    runSearch();
};

async function viewEmployeesManager() {
    let employees = await db.employeesByManager();
    console.table(employees);
    runSearch();
};

async function viewDepartment() {
    let employees = await db.viewDepartment();
    console.table(employees);
    runSearch();
};

async function addDepartment() {
    let department = await inquirer
        .prompt({
            name: 'name',
            type: 'input',
            message: 'What department would you like to add?',
        })
        console.log(department);

            let employees = await db.addDepartment(department);
            console.log(employees.affectedRows + " department inserted.");
            runSearch();

};

runSearch();
