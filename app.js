const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'manager name',  
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'employee ID',  
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'employee email',  
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'office number',  
        },
        {
            type: 'input',
            message: "Which type of team member would you like to add?",
            name: 'more team members',  
        }

        //repeating questions for other employee or end questions
        //if (answers.addOrEnd) {
            //return promptUser();
        //}

        //displayHTML();
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