const filterGifts = require('./filtrar_regalos_defectuosos');

test('Test: return type',() => {
    expect(
        Array.isArray(filterGifts(['car', 'doll#arm', 'ball', '#train'])))
        .toBe(true)
})

test("Test: filterGifts(['car', 'doll#arm', 'ball', '#train'])",() => {
    expect(
        filterGifts(['car', 'doll#arm', 'ball', '#train'])
    ).toStrictEqual(['car', 'ball'])
})

test("Test: filterGifts(['#broken','#rusty'])",() => {
    expect(
        filterGifts([])
    ).toStrictEqual([])
})

test("Test: filterGifts([])",() => {
    expect(
        filterGifts([])
    ).toStrictEqual([])
})

test("Test: filterGifts(['game', 'poster', 'sticker#bad', 'console'])",() => {
    expect(
        filterGifts(['game', 'poster', 'sticker#bad', 'console'])
    ).toStrictEqual(['game', 'poster', 'console'])
})

test("Test: filterGifts(['#bad','car','#oops','ball'])",() => {
    expect(
        filterGifts(['#bad','car','#oops','ball'])
    ).toStrictEqual(['car', 'ball'])
})