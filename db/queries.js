const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    employeesByDepartment() {
        return this.connection.query(
            "SELECT department.name AS department, employee.id, employee.first_name, employee.last_name, role.title, FROM employee LEFT JOIN role ON (role.id = employee.role_id LEFT JOIN department on department_id = role.department_id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    employeesByManager() {
        return this.connection.query(
            "SELECT CONCAT(manager.first_name, ' ', manager.last_name) AS manager department.name AS department, employee.id, employee.first_name, employee.last_name, role.title, FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }

    viewDepartment() {
        return this.connection.query(
            "SELECT * FROM department"
        );
    }

    viewRoles() {
        return this.connection.query(
            "SELECT * FROM role"
        );
    }

    addDepartment(department) {
        return this.connection.query(
            "INSERT INTO department SET ?", department
        );
    }

    addEmployee(employee) {
        return this.connection.query(
            "INSERT INTO employee SET ?", employee
        );
    }
}

module.exports = new DB(connection);