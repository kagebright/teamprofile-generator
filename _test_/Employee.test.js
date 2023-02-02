const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John Wick', '1', 'johnwick@gmail.com');

    expect(employee.name).toBe('John Wick');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('johnwick@gmail.com');
});

test('returns the employee name', () => {
    const employee = new Employee('John Wick', '1', 'johnwick@gmail.com');

    expect(employee.getName()).toBe('John Wick');
});

test('returns the employee id', () => {
    const employee = new Employee('John Wick', '1', 'johnwick@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('returns the employee email', () => {
    const employee = new Employee('John Wick', '1', 'johnwick@gmail.com');

    expect(employee.getEmail()).toBe('johnwick@gmail.com');
});

test('returns the employee role', () => {
    const employee = new Employee('John Wick', '1', 'johnwick@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});
