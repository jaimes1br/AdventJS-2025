const elfBattle = require('./batalla_elfos');

test('Test #1: return type',() => {
    expect(
        Number.isNaN(elfBattle('A','B')))
        .toBe(false)
})

test("Test #2: elfBattle('A','B')",() => {
    expect(
        elfBattle('A','B')
    ).toBe(0)
})

test("Test #3: elfBattle('F','B')",() => {
    expect(
        elfBattle('F','B')
    ).toBe(1)
})

test("Test #4: elfBattle('AAB','BBA')",() => {
    expect(
        elfBattle('AAB','BBA')
    ).toBe(0)
})

test("Test #5: elfBattle('AFA','BBA')",() => {
    expect(
        elfBattle('AFA','BBA')
    ).toBe(1)
})

test("Test #6: elfBattle('AFAB','BBAF')",() => {
    expect(
        elfBattle('AFAB','BBAF')
    ).toBe(1)
})

test("Test #7: elfBattle('AA','FF')",() => {
    expect(
        elfBattle('AA','FF')
    ).toBe(2)
})

test("Test #8: elfBattle('AAFFFBBB','ABBBBFFF')",() => {
    expect(
        elfBattle('AAFFFBBB','ABBBBFFF')
    ).toBe(1)
})