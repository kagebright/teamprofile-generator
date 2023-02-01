const Engineer = require('./lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John Wick', '1', 'johnwick@gmail.com', 'joh Wick');

    expect(engineer.name).toBe('John Wick');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('johnwick@gmail.com');
    expect(engineer.github).toBe('joh Wick');
});

test('returns the engineer github', () => {
    const engineer = new Engineer('John Wick', '1', 'johnwick@gmail.com', 'joh Wick');

    expect(engineer.getGithub()).toBe('johnwick');
});

test('returns the engineer role', () => {
    const engineer = new Engineer('John Wick', '1', 'johnwick@gmail.com', 'joh Wick');

    expect(engineer.getRole()).toBe('Engineer');
});
