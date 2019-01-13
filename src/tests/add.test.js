const add = (a, b) => a + b;

const generateGreeting = (name = 'User') => `Hello ${name}`;

test('should add two number', () => {
    const result = add(3, 4);

    // if (result !== 7) {
    //     throw new Error(`Result ${result} .. Expected 7`)
    // }

    expect(result).toBe(7);
});

test('should genereate greeting from name', () => {
    const result = generateGreeting('mo');

    expect(result).toBe(`Hello mo`);

})

test('should genereate for no name', () => {
    const result = generateGreeting();

    expect(result).toBe(`Hello User`);
})