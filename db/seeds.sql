USE employeedb;

INSERT INTO department (name)
VALUES
("Finance"),
("Sales"),
("Engineering"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
("Salesperson", 80000, 2),
("Lead Engineer", 150000, 3),
("Software Engineer", 120000, 3),
("Account Manager", 160000, 1),
("Accountant", 125000, 1),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
()