const decodeSantaPin = require('./descifra_pin')

test('Test #1: return type',() => {
    expect(typeof decodeSantaPin('[1++][2-][3+][<]'))
        .toBe('string')
})

test("Test #2: decodeSantaPin('[1++][2-][3+][<]')",() => {
    expect(
        decodeSantaPin('[1++][2-][3+][<]')
    ).toBe("3144")
})

test("Test #3: decodeSantaPin('[9+][0-][4][<]')",() => {
    expect(
        decodeSantaPin('[9+][0-][4][<]')
    ).toBe("0944")
})

test("Test #4: decodeSantaPin('[1+][2-]')",() => {
    expect(
        decodeSantaPin('[1+][2-]')
    ).toBe(null)
})

test("Test #5: decodeSantaPin('[4][5++][6--][5++]')",() => {
    expect(
        decodeSantaPin('[4][5++][6--][5++]')
    ).toBe("4747")
})

test("Test #6: decodeSantaPin('[9+][0-][0-][8+]')",() => {
    expect(
        decodeSantaPin('[9+][0-][0-][8+]')
    ).toBe("0999")
})

test("Test #6: decodeSantaPin('[0][<][<][<]')",() => {
    expect(
        decodeSantaPin('[0][<][<][<]')
    ).toBe("0000")
})

test("Test #7: decodeSantaPin('[1+++++++++][2--][3----][<]')",() => {
    expect(
        decodeSantaPin('[1+++++++++][2--][3----][<]')
    ).toBe("0099")
})