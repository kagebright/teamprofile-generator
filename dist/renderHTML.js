const path = require("path");
const fs = require("fs");

const tempPath = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

//pushes the information to html so it could be generated
  html.push(...employees
    .filter(employee => employee.obtainRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.obtainRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.obtainRole() === "Intern")
    .map(intern => generateIntern(intern))
  );

  return generateMainPage(html.join(""));

};

//replaces what is in the templates with the correct info
const generateManager = manager => {
  let template = fs.readFileSync(path.resolve(tempPath, "manager.html"), "utf8");
  template = replacements(template, "name", manager.obtainName());
  template = replacements(template, "role", manager.obtainRole());
  template = replacements(template, "email", manager.obtainEmail());
  template = replacements(template, "id", manager.obtainId());
  template = replacements(template, "officeNumber", manager.obtainOffice());
  return template;
};

const generateEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(tempPath, "engineer.html"), "utf8");
  template = replacements(template, "name", engineer.obtainName());
  template = replacements(template, "role", engineer.obtainRole());
  template = replacements(template, "email", engineer.obtainEmail());
  template = replacements(template, "id", engineer.obtainId());
  template = replacements(template, "github", engineer.obtainGithub());
  return template;
};

const generateIntern = intern => {
  let template = fs.readFileSync(path.resolve(tempPath, "intern.html"), "utf8");
  template = replacements(template, "name", intern.obtainName());
  template = replacements(template, "role", intern.obtainRole());
  template = replacements(template, "email", intern.obtainEmail());
  template = replacements(template, "id", intern.obtainId());
  template = replacements(template, "school", intern.obtainSchool());
  return template;
};


const generateMainPage = html => {
  const template = fs.readFileSync(path.resolve(tempPath, "main.html"), "utf8");
  return replacements(template, "team", html);
};

const replacements = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;