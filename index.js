const inquirer = require("inquirer");
const db = require("./db/queries");
const connection = require("./db/connection");
// const { employeesByManager } = require("./db/queries");


// write some inquirer prompts
const runSearch = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all roles',
                'View all departments',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role',
                // 'View all employees by department',
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case 'View all employees':
                    viewEmployees();
                    break;

                case 'View all roles':
                    viewRoles();
                    break;

                case 'View all departments':
                    viewDepartment();
                    break;

                case 'Add department':
                    addDepartment();
                    break;

                case 'Add role':
                    addRole();
                    break;

                case 'Add employee':
                    addEmployee();
                    break;

                case 'Update employee role':
                    // updateEmployeeRole();
                    break;

                // case 'View all employees by department':
                //     viewEmployeesDepartment();
                //     break;

                // case 'View all employees by manager':
                //     viewEmployeesManager();
                //     break;

                // case 'Remove employee':
                //     // removeEmployee();
                //     break;


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

async function viewRoles() {
    let role = await db.viewRoles();
    console.table(role);
    runSearch();
};

// async function viewEmployeesDepartment() {
//     let employees = await db.employeesByDepartment();
//     console.table(employees);
//     runSearch();
// };

// async function viewEmployeesManager() {
//     let employees = await db.employeesByManager();
//     console.table(employees);
//     runSearch();
// };

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
    console.log(employees.affectedRows + " department added.");
    runSearch();

};

async function addRole() {
    let role = await inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Name of role:',

            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this role?',

            },
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the department ID for this role?',

            },
        ]);

    console.log(role);

    let employees = await db.addRole(role);
    console.log(employees.affectedRows + " role added.");
    runSearch();

};


async function addEmployee() {
    let employee = await inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'Employee First Name:',

            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Employee Last Name:',
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'Role ID:',
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'Manager ID:',
            }
        ]);

    console.log(employee);

    let employees = await db.addEmployee(employee);
    console.log(employees.affectedRows + " employee added.");
    runSearch();

};

runSearch();
