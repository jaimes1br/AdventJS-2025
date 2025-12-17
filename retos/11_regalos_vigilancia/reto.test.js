const findUnsafeGifts = require('./regalos_vigilancia');

test('Test #1: return type',() => {
    expect(
        Number.isNaN(findUnsafeGifts([
            '...',
            '.*.',
            '...'
        ])))
        .toBe(false)
})

test(`Test #2: findUnsafeGifts([
        '.*.',
        '*#*',
        '.*.'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '.*.',
            '*#*',
            '.*.'
        ])
    ).toBe(0)
})

test(`Test #3: findUnsafeGifts([
        '...',
        '.*.',
        '...'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '...',
            '.*.',
            '...'
        ])
    ).toBe(1)
})

test(`Test #4: findUnsafeGifts([
        '*.*',
        '...',
        '*#*'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '*.*',
            '...',
            '*#*'
        ])
    ).toBe(2)
})

test(`Test #5: findUnsafeGifts([
        '.....',
        '.*.*.',
        '..#..',
        '.*.*.',
        '.....'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '.....',
            '.*.*.',
            '..#..',
            '.*.*.',
            '.....'
        ])
    ).toBe(4)
})

test(`Test #6: findUnsafeGifts([
        '#*.',
        '...',
        '..#'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '#*.',
            '...',
            '..#'
        ])
    ).toBe(0)
})

test(`Test #7: findUnsafeGifts([
        '...#....',
        '..*#*..',
        '...#....'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '...#....',
            '..*#*..',
            '...#....'
        ])
    ).toBe(0)
})

test(`Test #8: findUnsafeGifts([
        '*.*',
        '...',
        '*.*'
    ])`,() => {
    expect(
        findUnsafeGifts([
            '*.*',
            '...',
            '*.*'
        ])
    ).toBe(4)
})


