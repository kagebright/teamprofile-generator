const Employee = require('./lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('johndoe@example.com');
});

test('gets the employee name', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');

    expect(employee.getName()).toBe('John Doe');
});

test('gets the employee id', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');

    expect(employee.getId()).toBe('1');
});

test('gets the employee email', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');

    expect(employee.getEmail()).toBe('johndoe@example.com');
});

test('gets the employee role', () => {
    const employee = new Employee('John Doe', '1', 'johndoe@example.com');

    expect(employee.getRole()).toBe('Employee');
});
