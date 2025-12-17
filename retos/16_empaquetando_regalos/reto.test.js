const packGifts = require('./empaquetando_regalos');

test('Test #1: return type',() => {
    expect(
        Number.isNaN(packGifts([], 10)))
        .toBe(false)
})

test("Test #2: packGifts([2,3,4,1], 5)",() => {
    expect(
        packGifts([2,3,4,1], 5)
    ).toBe(2)
})

test("Test #3: packGifts([3,3,2,1], 3)",() => {
    expect(
        packGifts([3,3,2,1], 3)
    ).toBe(3)
})

test("Test #4: packGifts([1,1,1,1], 2)",() => {
    expect(
        packGifts([1,1,1,1], 2)
    ).toBe(2)
})

test("Test #5: packGifts([5,6,1], 5)",() => {
    expect(
        packGifts([5,6,1], 5)
    ).toBe(null)
})

test("Test #6: packGifts([], 10)",() => {
    expect(
        packGifts([], 10)
    ).toBe(0)
})

test("Test #7: packGifts([1,2,3,4,5], 10)",() => {
    expect(
        packGifts([1,2,3,4,5], 10)
    ).toBe(2)
})

test("Test #8: packGifts([5,5,5,5], 5)",() => {
    expect(
        packGifts([5,5,5,5], 5)
    ).toBe(4)
})

test("Test #9: packGifts([1], 1)",() => {
    expect(
        packGifts([1], 1)
    ).toBe(1)
})

test("Test #10: packGifts([10], 5)",() => {
    expect(
        packGifts([10], 5)
    ).toBe(null)
})

test("Test #11: packGifts([1,2,3], 6)",() => {
    expect(
        packGifts([1,2,3], 6)
    ).toBe(1)
})

test("Test #12: packGifts([3,3,3], 5)",() => {
    expect(
        packGifts([3,3,3], 5)
    ).toBe(3)
})