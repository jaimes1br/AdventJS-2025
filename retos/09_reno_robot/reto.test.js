const moveReno = require('./reno_robot')

test('Test #1: return type',() => {
    expect(typeof moveReno(`\n.....\n.*#.*\n.@...\n.....\n`,'D'))
            .toBe('string')
})

test("Test #2: moveReno('\n.....\n.*#.*\n.@...\n.....\n','D')",() => {
    expect(
        moveReno('\n.....\n.*#.*\n.@...\n.....\n','D')
    ).toBe('fail')
})

test("Test #3: moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'RRRUU')",() => {
    expect(
        moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'RRRUU')
    ).toBe('success')
})

test("Test #4: moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'D')",() => {
    expect(
        moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'D')
    ).toBe('fail')
})

test("Test #5: moveReno(`\n .....\n .*#.*\n .@...\n.....\n`, 'DD')",() => {
    expect(
        moveReno(`\n .....\n .*#.*\n .@...\n.....\n`, 'DD')
    ).toBe('crash')
})

test("Test #6: moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'RU')",() => {
    expect(
        moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'RU')
    ).toBe('crash')
})

test("Test #7: moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'UUU')",() => {
    expect(
        moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'UUU')
    ).toBe('success')
})

test("Test #8: moveReno(`\n.....\n.*#.*\n.@...\n.....\n`, 'RR')",() => {
    expect(
        moveReno(`\n.....\n.*#.*\n.@...\n.....\n`,'RR')
    ).toBe('fail')
})

test("Test #9: moveReno(`\n.....\n.....\n.@..*\n.....\n`, 'RRRRRRRRR')",() => {
    expect(
        moveReno(`\n.....\n.....\n.@..*\n.....\n`, 'RRRRRRRRR')
    ).toBe('success')
})