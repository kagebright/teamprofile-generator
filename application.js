const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const questions = require("./lib/questions.js");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'team manager',  
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'team manager id',  
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'team manager email',  
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'team manager number',  
        },
        {
            type: 'input',
            message: "Which type of team member would you like to add?",
            name: 'more team members',  
        },
    ])