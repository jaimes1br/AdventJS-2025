const hasFourInARow = require('./luces_linea')

test('Test #1: return type',() => {
    expect(typeof hasFourInARow([
            ['R', 'G', 'R'],
            ['G', 'R', 'G'],
            ['G', 'R', 'G']
        ]))
        .toBe('boolean')
})

test(`Test #2: hasFourInARow([
        ['R', '.', '.', '.'],
        ['.', 'R', '.', '.'],
        ['.', '.', 'R', '.'],
        ['.', '.', '.', 'R']
    ])`,() => {
    expect(hasFourInARow([
        ['R', '.', '.', '.'],
        ['.', 'R', '.', '.'],
        ['.', '.', 'R', '.'],
        ['.', '.', '.', 'R']
    ])).toBeTruthy()
})

test(`Test #3: hasFourInARow([
        ['.', '.', '.', 'G'],
        ['.', '.', 'G', '.'],
        ['.', 'G', '.', '.'],
        ['G', '.', '.', '.']
    ])`,() => {
    expect(hasFourInARow([
        ['.', '.', '.', 'G'],
        ['.', '.', 'G', '.'],
        ['.', 'G', '.', '.'],
        ['G', '.', '.', '.']
    ])).toBeTruthy()
})

test(`Test #4: hasFourInARow([
        ['R', 'R', 'R', 'R'],
        ['G', 'G', '.', '.'],
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
    ])`,() => {
    expect(hasFourInARow([
        ['R', 'R', 'R', 'R'],
        ['G', 'G', '.', '.'],
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
    ])).toBeTruthy()
})

test(`Test #5: hasFourInARow([
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G']
    ])`,() => {
    expect(hasFourInARow([
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G']
    ])).toBeFalsy()
})

test(`Test #6: hasFourInARow([
        ['.', 'G', '.'],
        ['.', 'G', '.'],
        ['.', 'G', '.'],
        ['.', 'G', '.']
    ])`,() => {
    expect(hasFourInARow([
        ['.', 'G', '.'],
        ['.', 'G', '.'],
        ['.', 'G', '.'],
        ['.', 'G', '.']
    ])).toBeTruthy()
})

