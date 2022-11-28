//CREATE A PROMPT THAT HAS CHOICES FOR WHAT THE USER CAN DO
// VIEW ALL EMPLOYEES, CREATE EMPLOYEES, UPDATE EMPLOYEES
const inquirer = require('inquirer');
const { viewAllRoles } = require('./db');
// const { viewAllEmployees, createEmployee } = require('./db');
const db = require('./db');
require('console.table');

const choices = [
    {
    type: 'list',
    message: 'What would you like to do',
    name: 'choice',
    choices: ['View all Departments', 'View all Employees', 'Create Employee', 'View all Roles'],
    },
]

function init() {
    loadPrompts();
}

function loadPrompts() {
    inquirer.prompt(choices).then((answers) => {
        switch(answers.choice) {
            case 'View all Departments':
            viewDepartments();
            break;
            case 'View all Employees':
            viewEmployees();
            break;
            case 'Create Employee':
            createEmployee();
            break;
            case 'View all Roles':
                viewRoles();
                break;
            default: console.log('Closing App...')
            
        
        }
    })

}

function viewEmployees() {
    db.viewAllEmployees().then(([rows]) => {
        let employees = rows;
        console.table(employees);
        loadPrompts();
    })
}

function viewDepartments() {
    db.viewAllDepartments().then(([departments]) => {
        let allDepartments = departments;
        console.table(allDepartments);
        loadPrompts();
    })
}

function viewRoles() {
    db.viewAllRoles().then(([roles]) => {
        let allRoles = roles;
        console.table(allRoles);
        loadPrompts();
    })
}

init();


