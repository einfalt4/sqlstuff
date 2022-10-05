const db = require('./connection');

//REVIEW ACTIVTIES 23, 21 SERVER.JS, 9 (9 IS IN A SQL FILE, BUT IF YOU WRITE IT IN QUOTES, THEN IT ACTS AS A SQL FILE)
// 24 SERVER.JS 
class DB {
    constructor(db) {
        this.db = db;
    }

    viewAllEmployees() {
        return this.db.promise().query(
            "SELECT * FROM employees"
        )
    }
    
    viewAllDepartments() {
        return this.db.promise().query(
            "SELECT * FROM departments"
        )
    }

    createEmployee(employee) {
        return this.db.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }
}