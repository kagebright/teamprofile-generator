const Intern = require('./lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John Wick', '1', 'johnwick@gmail.com', 'MIT');

    expect(intern.name).toBe('John Wick');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('johnwick@gmail.com');
    expect(intern.school).toBe('MIT');
});

test('returns the school of the intern', () => {
    const intern = new Intern('John Wick', '1', 'johnwick@gmail.com', 'MIT');

    expect(intern.getSchool()).toBe('MIT');
});

test('returns the role of the intern', () => {
    const intern = new Intern('John Wick', '1', 'johnwick@gmail.com', 'MIT');

    expect(intern.getRole()).toBe('Intern');
});