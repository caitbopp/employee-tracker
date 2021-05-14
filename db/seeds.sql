USE employees;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Cust Serv Rep", 45000, 1), ("Marketing Specialist", 70000, 2), ("Staff Accountant", 50000, 3), ("Assistant Director", 80000, 4), ("Associate Director", 90000, 5), ("Director", 100000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES ("Caitlin", "Bopp", 6, 2), ("John", "Smith", 3, 4), ("Sam", "Jones", 2, 5), ("Mary", "Roberts", 1, 6);
