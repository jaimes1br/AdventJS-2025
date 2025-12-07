const drawTree = require('./montando_arbol');

test('Test #1: return type',() => {
    expect(typeof drawTree(5, 'o', 2))
        .toBe('string')
})

test("Test #2: drawTree(5, 'o', 2)",() => {
    expect(
        drawTree(5, 'o', 2)
    ).toBe('    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #')
})

test("Test #3: drawTree(3, '@', 3)",() => {
    expect(
        drawTree(3, '@', 3)
    ).toBe('  *\n *@*\n*@**@\n  #')
})

test("Test #4: drawTree(4, '+', 1)",() => {
    expect(
        drawTree(4, '+', 1)
    ).toBe('   +\n  +++\n +++++\n+++++++\n   #')
})

test("Test #5: drawTree(1, 'x', 2)",() => {
    expect(
        drawTree(1, 'x', 2)
    ).toBe('*\n#')
})

test("Test #6: drawTree(2, 'o', 2)",() => {
    expect(
        drawTree(2, 'o', 2)
    ).toBe(' *\no*o\n #')
})