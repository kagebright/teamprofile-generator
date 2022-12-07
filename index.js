const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const questions = require("./lib/questions.js");
const path = require("path")
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
        }

        //repeating questions for other employee or end questions
        if (answers.addOrEnd) {
            return promptUser();
        }

        displayHTML();
    ]);

    //function to display the HTML
    let displayHTML = () => {
        let makeHTML = render(employeeArray);
        fs.writetoFile(outputPath, makeHTML, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully created user file")
            };
        });
    };

    promptUser();