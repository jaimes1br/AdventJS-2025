const revealSantaRoute = require('./viaje_secreto');

test('Test #1: return type',() => {
    expect(
        Array.isArray(revealSantaRoute([
            ['STA', 'HYD'],
            ['ESP', 'CHN']
        ])))
        .toBe(true)
})

test(`Test #2: revealSantaRoute([["MEX", "CAN"], ["UK", "GER"], ["CAN", "UK"]])`,() => {
    expect(
        revealSantaRoute([["MEX", "CAN"], ["UK", "GER"], ["CAN", "UK"]])
    )
    .toStrictEqual([
        "MEX",
        "CAN",
        "UK",
        "GER"       
    ])
})

test(`Test #3: revealSantaRoute([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"], ["CMX", "HKN"]])`,() => {
    expect(
        revealSantaRoute([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"], ["CMX", "HKN"]])
    )
    .toStrictEqual([
        "USA",
        "BRA",
        "UAE",
        "JPN",
        "PHL"
    ])
})

test(`Test #4: revealSantaRoute([["STA", "HYD"], ["ESP", "CHN"]])`,() => {
    expect(
        revealSantaRoute([["STA", "HYD"], ["ESP", "CHN"]])
    )
    .toStrictEqual([
        "STA",
        "HYD"
    ])
})

test(`Test #5: revealSantaRoute([["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"]])`,() => {
    expect(
        revealSantaRoute([["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"]])
    )
    .toStrictEqual([
        "A",
        "B"
    ])
})