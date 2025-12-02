const manufactureGifts = require('./fabrica_juguetes');

test('Test: return type',() => {
    expect(
        Array.isArray(manufactureGifts([{ toy: 'car', quantity: 3 }])))
        .toBe(true)
})

test(`Test: [
        { toy: 'car', quantity: 3 },
        { toy: 'doll', quantity: 1 },
        { toy: 'ball', quantity: 2 }
    ]`,() => {
    expect(
        manufactureGifts([
            { toy: 'car', quantity: 3 },
            { toy: 'doll', quantity: 1 },
            { toy: 'ball', quantity: 2 }
        ]))
        .toStrictEqual([
            "car",
            "car",
            "car",
            "doll",
            "ball",
            "ball"
        ])
})

test(`Test: [
       { toy: 'train', quantity: 0 }, 
       { toy: 'bear', quantity: -2 }, 
       { toy: 'puzzle', quantity: 1 }
    ]`,() => {
    expect(
        manufactureGifts([
            { toy: 'train', quantity: 0 }, 
            { toy: 'bear', quantity: -2 }, 
            { toy: 'puzzle', quantity: 1 }
        ]))
        .toStrictEqual([
            "puzzle"
        ])
})

test(`Test: []`,() => {
    expect(
        manufactureGifts([]))
        .toStrictEqual([])
})

test(`Test: [
        { toy: 'car', quantity: 1 },
        { toy: 'doll', quantity: 2 },
        { toy: 'car', quantity: 3 }
    ]`,() => {
    expect(
        manufactureGifts([
            { toy: 'car', quantity: 1 },
            { toy: 'doll', quantity: 2 },
            { toy: 'car', quantity: 3 }
        ]))
        .toStrictEqual([
            "car",
            "doll",
            "doll",
            "car",
            "car",
            "car"
        ])
})

test(`Test: [
        { toy: 'robot', quantity: 2 },
        { toy: 'drone', quantity: '3' },
        { toy: 'ball', quantity: 1 }
    ]`,() => {
    expect(
        manufactureGifts([
            { toy: 'robot', quantity: 2 },
            { toy: 'drone', quantity: '3' },
            { toy: 'ball', quantity: 1 }
        ]))
        .toStrictEqual([
            "robot",
            "robot",
            "ball"
        ])
})