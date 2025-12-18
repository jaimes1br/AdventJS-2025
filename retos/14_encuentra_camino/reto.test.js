const findGiftPath = require('./encuentra_camino')
const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

test('Test #1: return type',() => {
    expect(
        Array.isArray(findGiftPath(workshop, 'train')))
        .toBe(true)
})

test(`Test #2: findGiftPath(workshop, 'train')`,() => {
    expect(
        findGiftPath(workshop, 'train')
        )
        .toStrictEqual([
            "storage",
            "shelf",
            "box1"
        ])
})

test(`Test #3: findGiftPath(workshop, 'train')`,() => {
    expect(
            findGiftPath(workshop, 'switch')
        )
        .toStrictEqual([
            "storage",
            "shelf",
            "box2"
        ])
})

test(`Test #4: findGiftPath(workshop, 'car')`,() => {
    expect(
            findGiftPath(workshop, 'car')
        )
        .toStrictEqual([
            "storage",
            "box"
        ])
})

test(`Test #5: findGiftPath(workshop, 'doll')`,() => {
    expect(
            findGiftPath(workshop, 'doll')
        )
        .toStrictEqual([
            "gift"
        ])
})

test(`Test #6: findGiftPath(workshop, 'plane')`,() => {
    expect(
            findGiftPath(workshop, 'plane')
        )
        .toStrictEqual([

        ])
})

test(`Test #7: findGiftPath({ a: { b: { c: 42 } } }, 42)`,() => {
    expect(
            findGiftPath({ a: { b: { c: 42 } } }, 42)
        )
        .toStrictEqual([
            "a",
            "b",
            "c"
        ])
})

test(`Test #8: findGiftPath({ ok: true, nested: { nope: false, extra: { is: 0 } } }, false)`,() => {
    expect(
            findGiftPath({ ok: true, nested: { nope: false, extra: { is: 0 } } }, false)
        )
        .toStrictEqual([
            "nested",
            "nope"
        ])
})