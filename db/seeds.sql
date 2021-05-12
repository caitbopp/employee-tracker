USE employees;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Director", 150000, 1), ("Manager", 90000, 1), ("Assistant Director", 85000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id);
VALUES ("Caitlin", "Bopp", 5, 2), ("John", "Smith", 8, 1), ("Sam", "Jones", 3, 2), ("Mary", "Roberts", 1, 3);
