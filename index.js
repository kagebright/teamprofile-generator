const inquirer = require("inquirer");
const fs = require("fs");

//lib modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let employeeArray = [];

//function that prompts the user for questions
function askQuestions() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: "What is your name?",
        name: 'name',  
      },
      {
        type: 'input',
        message: "What is your ID number?",
        name: "ID",  
      },
      {
        type: 'input',
        message: "What is your email?",
        name: "email",  
      },
      {
        type: 'list',
        message: "What is your role?",
        name: "role",  
        choices: ["Engineer", "Intern", "Manager"],
      }

    ])
    .then(answers => {
      //If manager is selected, user gets prompted to answers these questions
      if (answers.role === "Manager") {
        askManagerQuestions(answers);
      } else if (answers.role === "Engineer") {
        askEngineerQuestions(answers);
      } else if (answers.role === "Intern") {
        askInternQuestions(answers);
      }
    });
}

function askManagerQuestions(answers) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
      ])
          .then(managerAnswer => {
            const newManager = new Manager (
              answers.name,
              answers.id,
              answers.email,
              managerAnswer.officeNumber
            );
            employeeArray.push(newManager);
          });
      //if engineer is selected
      } 
      function askEngineerQuestions(answers) {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github"
            },
          ]).then(githubAnswer => {
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAnswer.github
            );
            employeeArray.push(newEngineer);
          });
      //if intern is selected
      };
      function askInternQuestions(answers) {
        inquirer   
          .prompt([
            {
              type: "input",
              message: "What school do you attend?",
              name: "school"
            },
          ]).then(internAnswers => {
            const newIntern =new Intern(
              answers.name,
              answers.id,
              answers.email,
              internAnswers.school
            );
            employeeArray.push(newIntern);
          });
      };
    
//function that displays HTML
let displayHTML = () => {
    let createHTML = render(employeeArray);
    fs.writeFile(outputPath, createHTML, (error) =>  {
        if (error) {
            console.log(error);
        } else {
            console.log("Successfully created file!");
        }
    });
};

promptUser();