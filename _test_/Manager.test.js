const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates an instance of Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager).toBeInstanceOf(Manager);
});

test('returns the name of the Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager.getName()).toBe('John Wick');
});

test('returns the ID of the Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager.getId()).toBe('1');
});

test('returns the email of the Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager.getEmail()).toBe('johnwick@gmail.com');
});

test('returns the office number of the Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager.getOfficeNumber()).toBe('123');
});

test('returns the role of the Manager', () => {
    const manager = new Manager('John Wick', '1', 'johnwick@gmail.com', '123');
    expect(manager.getRole()).toBe('Manager');
});
