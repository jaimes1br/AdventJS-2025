const drawGift = require('./ayuda_becario')

test('Test: return type',() => {
    expect(typeof drawGift(5, '*'))
        .toBe('string')
})

test('Test: drawGift(1, "+")',() => {
    expect(
        drawGift(1, "+")
    ).toBe("")
})

test('Test: drawGift(2, "#")',() => {
    expect(
        drawGift(2, "#")
    ).toBe('##\n##')
})

test('Test: drawGift(3, "#")',() => {
    expect(
        drawGift(3, "#")
    ).toBe('###\n# #\n###')
})

test('Test: drawGift(4, "*")',() => {
    expect(
        drawGift(4, "*")
    ).toBe('****\n*  *\n*  *\n****')
})

test('Test: drawGift(5, "@")',() => {
    expect(
        drawGift(5, "@")
    ).toBe('@@@@@\n@   @\n@   @\n@   @\n@@@@@')
})
