//Defining and exporting the engineer class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        const role = "Engineer"
        super(name, id, email)
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
}
module.exports = Engineer; 