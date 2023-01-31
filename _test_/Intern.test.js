const Intern = require('./lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John Doe', '1', 'johndoe@example.com', 'MIT');

    expect(intern.name).toBe('John Doe');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('johndoe@example.com');
    expect(intern.school).toBe('MIT');
});

test('gets the intern school', () => {
    const intern = new
