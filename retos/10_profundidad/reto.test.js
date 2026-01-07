const maxDepth = require('./profundidad');

test('Test #1: return type',() => {
    expect(
        Number.isNaN(maxDepth('[]')))
        .toBe(false)
})

test("Test #2: maxDepth('[]'",() => {
    expect(
        maxDepth('[]')
    ).toBe(1)
})

test("Test #3: maxDepth('[[]]'",() => {
    expect(
        maxDepth('[[]]')
    ).toBe(2)
})

test("Test #4: maxDepth('[][]'",() => {
    expect(
        maxDepth('[][]')
    ).toBe(1)
})

test("Test #5: maxDepth('[[][]]'",() => {
    expect(
        maxDepth('[[][]]')
    ).toBe(2)
})

test("Test #6: maxDepth('[[[]]]'",() => {
    expect(
        maxDepth('[[[]]]')
    ).toBe(3)
})

test("Test #7: maxDepth('[][[]][]'",() => {
    expect(
        maxDepth('[][[]][]')
    ).toBe(2)
})

test("Test #8: maxDepth(']['",() => {
    expect(
        maxDepth('][')
    ).toBe(-1)
})

test("Test #9: maxDepth('[[['",() => {
    expect(
        maxDepth('[[[')
    ).toBe(-1)
})

test("Test #10: maxDepth('[]]]]'",() => {
    expect(
        maxDepth('[]]]]')
    ).toBe(-1)
})

test("Test #11: maxDepth('[][]['",() => {
    expect(
        maxDepth('[][][')
    ).toBe(-1)
})
