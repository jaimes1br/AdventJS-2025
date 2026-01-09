const canEscape = require('./laberinto');

test('Test #1: return type',() => {
    expect(typeof canEscape([['S', '.', '#', '.'], ['#', '.', '#', '.'], ['.', '.', '.', '.'], ['#', '#', '#', 'E']]))
        .toBe('boolean')
})

test(`Test #2: canEscape([['S', '.', '#', '.'], ['#', '.', '#', '.'], ['.', '.', '.', '.'], ['#', '#', '#', 'E']])`,() => {
    expect(
        canEscape([['S', '.', '#', '.'], ['#', '.', '#', '.'], ['.', '.', '.', '.'], ['#', '#', '#', 'E']])
    ).toBeTruthy()
})

test(`Test #3: canEscape([['S', '#', '#'], ['.', '#', '.'], ['.', '#', 'E']])`,() => {
    expect(
        canEscape([['S', '#', '#'], ['.', '#', '.'], ['.', '#', 'E']])
    ).toBeFalsy()
})

test(`Test #4: canEscape([['S', 'E']])`,() => {
    expect(
        canEscape([['S', 'E']])
    ).toBeTruthy()
})

test(`Test #5: canEscape([['S', '#', 'E']])`,() => {
    expect(
        canEscape([['S', '#', 'E']])
    ).toBeFalsy()
})

test(`Test #6: canEscape([['S', '.', '.'], ['#', '#', '.'], ['E', '.', '.']])`,() => {
    expect(
        canEscape([['S', '.', '.'], ['#', '#', '.'], ['E', '.', '.']])
    ).toBeTruthy()
})

test(`Test #7: canEscape([['S', '.', '.'], ['.', '.', '.'], ['.', '.', 'E']])`,() => {
    expect(
        canEscape([['S', '.', '.'], ['.', '.', '.'], ['.', '.', 'E']])
    ).toBeTruthy()
})

test(`Test #8: canEscape([['S', '.', '.', '.', '.'], ['#', '#', '#', '#', 'E']])`,() => {
    expect(
        canEscape([['S', '.', '.', '.', '.'], ['#', '#', '#', '#', 'E']])
    ).toBeTruthy()
})