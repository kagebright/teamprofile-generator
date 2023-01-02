//Defining and exporting the engineer class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        const role = "Engineer"
        super(name, id, email)
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getGitHub() {
        return this.github;
    }
}
module.exports = Engineer; 