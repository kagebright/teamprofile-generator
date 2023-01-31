const Engineer = require('./lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');

    expect(engineer.name).toBe('John Doe');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('johndoe@example.com');
    expect(engineer.github).toBe('johndoe');
});

test('gets the engineer github', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');

    expect(engineer.getGithub()).toBe('johndoe');
});

test('gets the engineer role', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');

    expect(engineer.getRole()).toBe('Engineer');
});
