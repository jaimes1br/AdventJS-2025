const hasFourLights = require('./panel_navideno')

test('Test #1: return type',() => {
    expect(typeof hasFourLights([
            ['R', 'G', 'R'],
            ['G', 'R', 'G'],
            ['G', 'R', 'G']
        ]))
        .toBe('boolean')
})

test(`Test #2: hasFourLights([
        ['.', '.', '.', '.', '.'],
        ['R', 'R', 'R', 'R', '.'],
        ['G', 'G', '.', '.', '.']
    ])`,() => {
    expect(hasFourLights([
        ['.', '.', '.', '.', '.'],
        ['R', 'R', 'R', 'R', '.'],
        ['G', 'G', '.', '.', '.']
    ])).toBeTruthy()
})

test(`Test #3: hasFourLights([
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.']
    ])`,() => {
    expect(hasFourLights([
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.'],
        ['.', 'G', '.', '.']
    ])).toBeTruthy()
})

test(`Test #4: hasFourLights([
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G']
    ])`,() => {
    expect(hasFourLights([
        ['R', 'G', 'R'],
        ['G', 'R', 'G'],
        ['G', 'R', 'G']
    ])).toBeFalsy()
})

test(`Test #5: hasFourLights([
        ['R', 'R', 'R', '.'],
        ['.', '.', '.', '.']
    ])`,() => {
    expect(hasFourLights([
        ['R', 'R', 'R', '.'],
        ['.', '.', '.', '.']
    ])).toBeFalsy()
})

test(`Test #6: hasFourLights([
        ['.', '.', 'R', 'R', 'R', 'R'],
        ['.', '.', '.', '.', '.', '.']
    ])`,() => {
    expect(hasFourLights([
        ['.', '.', 'R', 'R', 'R', 'R'],
        ['.', '.', '.', '.', '.', '.']
    ])).toBeTruthy()
})

test(`Test #7: hasFourLights([
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
    ])`,() => {
    expect(hasFourLights([
        ['.', '.', '.', '.'],
        ['.', '.', '.', '.']
    ])).toBeFalsy()
})

test(`Test #8: hasFourLights([
        ['G', 'G', 'G', 'G', 'G']
    ])`,() => {
    expect(hasFourLights([
        ['G', 'G', 'G', 'G', 'G']
    ])).toBeTruthy()
})

