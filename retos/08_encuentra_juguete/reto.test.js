const findUniqueToy = require('./encuentra_juguete')

test('Test #1: return type',() => {
    expect(typeof findUniqueToy('Gift'))
        .toBe('string')
})

test("Test #2: findUniqueToy('Gift')",() => {
    expect(
        findUniqueToy('Gift')
    ).toBe('G')
})

test("Test #3: findUniqueToy('sS')",() => {
    expect(
        findUniqueToy('sS')
    ).toBe('')
})

test("Test #4: findUniqueToy('reindeeR')",() => {
    expect(
        findUniqueToy('reindeeR')
    ).toBe('i')
})

test("Test #5: findUniqueToy('sTreSS')",() => {
    expect(
        findUniqueToy('sTreSS')
    ).toBe('T')
})

test("Test #6: findUniqueToy('aA')",() => {
    expect(
        findUniqueToy('aA')
    ).toBe('')
})

test("Test #7: findUniqueToy('z')",() => {
    expect(
        findUniqueToy('z')
    ).toBe('z')
})

test("Test #8: findUniqueToy('')",() => {
    expect(
        findUniqueToy('')
    ).toBe('')
})

test("Test #9: findUniqueToy('abcDEF')",() => {
    expect(
        findUniqueToy('abcDEF')
    ).toBe('a')
})

test("Test #10: findUniqueToy('aabbc')",() => {
    expect(
        findUniqueToy('aabbc')
    ).toBe('c')
})

test("Test #11: findUniqueToy('AaBbCc')",() => {
    expect(
        findUniqueToy('AaBbCc')
    ).toBe('')
})
