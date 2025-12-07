const matchGloves = require('./emparejando_guantes')

test('Test #1: return type',() => {
    expect(
        Array.isArray(matchGloves([{ hand: 'L', color: 'red' }])))
        .toBe(true)
})

test(`Test #2: matchGloves([
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'red' },
        { hand: 'R', color: 'green' },
        { hand: 'L', color: 'blue' },
        { hand: 'L', color: 'green' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'red' },
            { hand: 'R', color: 'green' },
            { hand: 'L', color: 'blue' },
            { hand: 'L', color: 'green' }
        ])
        )
        .toStrictEqual(
            ["red", "green"]
        )
})

test(`Test #3: matchGloves([
        { hand: 'L', color: 'gold' },
        { hand: 'R', color: 'gold' },
        { hand: 'L', color: 'gold' },
        { hand: 'L', color: 'gold' },
        { hand: 'R', color: 'gold' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'gold' },
            { hand: 'R', color: 'gold' },
            { hand: 'L', color: 'gold' },
            { hand: 'L', color: 'gold' },
            { hand: 'R', color: 'gold' }
        ])
        )
        .toStrictEqual(
            ["gold", "gold"]
        )
})

test(`Test #4: matchGloves([
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'green' },
        { hand: 'L', color: 'blue' }
     ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'green' },
            { hand: 'L', color: 'blue' }
        ])
        )
        .toStrictEqual(
            []
        )
})

test(`Test #5: matchGloves([
        { hand: 'L', color: 'green' },
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'red' },
        { hand: 'R', color: 'green' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'green' },
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'red' },
            { hand: 'R', color: 'green' }
        ])
        )
        .toStrictEqual(
            ['red','green']
        )
})

test(`Test #6: matchGloves([
        { hand: 'R', color: 'blue' },
        { hand: 'L', color: 'blue' },
        { hand: 'R', color: 'blue' },
        { hand: 'L', color: 'blue' },
        { hand: 'L', color: 'blue' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'R', color: 'blue' },
            { hand: 'L', color: 'blue' },
            { hand: 'R', color: 'blue' },
            { hand: 'L', color: 'blue' },
            { hand: 'L', color: 'blue' }
        ])
        )
        .toStrictEqual(
            ['blue','blue']
        )
})

test(`Test #7: matchGloves([
        { hand: 'R', color: 'green' },
        { hand: 'L', color: 'red' },
        { hand: 'R', color: 'red' },
        { hand: 'L', color: 'green' },
        { hand: 'L', color: 'red' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'R', color: 'green' },
            { hand: 'L', color: 'red' },
            { hand: 'R', color: 'red' },
            { hand: 'L', color: 'green' },
            { hand: 'L', color: 'red' }
        ])
        )
        .toStrictEqual(
            ['red','green']
        )
})

test(`Test #8: matchGloves([
        { hand: 'L', color: 'green' },
        { hand: 'L', color: 'red' },
        { hand: 'L', color: 'red' },
        { hand: 'L', color: 'green' },
        { hand: 'L', color: 'red' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'green' },
            { hand: 'L', color: 'red' },
            { hand: 'L', color: 'red' },
            { hand: 'L', color: 'green' },
            { hand: 'L', color: 'red' }
        ])
        )
        .toStrictEqual(
            []
        )
})

test(`Test #9: matchGloves([
        { hand: 'L', color: 'silver' },
        { hand: 'L', color: 'silver' },
        { hand: 'R', color: 'silver' },
        { hand: 'R', color: 'silver' },
        { hand: 'R', color: 'silver' }
    ])`,() => {
    expect(
        matchGloves([
            { hand: 'L', color: 'silver' },
            { hand: 'L', color: 'silver' },
            { hand: 'R', color: 'silver' },
            { hand: 'R', color: 'silver' },
            { hand: 'R', color: 'silver' }
        ])
        )
        .toStrictEqual(
            ['silver', 'silver']
        )
})
