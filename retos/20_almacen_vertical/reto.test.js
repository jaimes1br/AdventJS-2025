const dropGifts = require('./almacen_vertical')

test('Test #1: return type',() => {
    expect(
        Array.isArray([['.', '.', '.'], ['.', '#', '.'], ['#', '#', '.']], [0]))
        .toBe(true)
})

test(`Test #2: dropGifts([['.', '.', '.'], ['.', '#', '.'], ['#', '#', '.']], [0])`,() => {
    expect(
        dropGifts([['.', '.', '.'], ['.', '#', '.'], ['#', '#', '.']], [0])
    )
    .toStrictEqual([[
        ".",
        ".",
        "."
    ],
    [
        "#",
        "#",
        "."
    ],
    [
        "#",
        "#",
        "."
    ]])
})

test(`Test #3: dropGifts([['.', '.', '.'], ['#', '#', '.'], ['#', '#', '#']], [0, 2])`,() => {
    expect(
        dropGifts([['.', '.', '.'], ['#', '#', '.'], ['#', '#', '#']], [0, 2])
    )
    .toStrictEqual([
        [
            "#",
            ".",
            "."
        ],
        [
            "#",
            "#",
            "#"
        ],
        [
            "#",
            "#",
            "#"
        ]
    ])
})

test(`Test #4: dropGifts([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']], [0, 1, 2])`,() => {
    expect(
        dropGifts([['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']], [0, 1, 2])
    )
    .toStrictEqual([
        [
            ".",
            ".",
            "."
        ],
        [
            ".",
            ".",
            "."
        ],
        [
            "#",
            "#",
            "#"
        ]
    ])
})

test(`Test #5: dropGifts([['#', '.'], ['#', '.']], [0])`,() => {
    expect(
        dropGifts([['#', '.'], ['#', '.']], [0])
    )
    .toStrictEqual([
        [
            "#",
            "."
        ],
        [
            "#",
            "."
        ]
    ])
})

test(`Test #6: dropGifts([['.']], [0])`,() => {
    expect(
        dropGifts([['.']], [0])
    )
    .toStrictEqual([
        [
            "#"
        ]
    ])
})

test(`Test #7: dropGifts([['.', '.'], ['.', '.']], [0, 0])`,() => {
    expect(
        dropGifts([['.', '.'], ['.', '.']], [0, 0])
    )
    .toStrictEqual([
        [
            "#",
            "."
        ],
        [
            "#",
            "."
        ]
    ])
})