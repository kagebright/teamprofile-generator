//defining the intern class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        const role ="Intern";
        super(name, id, email, role);
    };
    
}

module.exports = Intern;
