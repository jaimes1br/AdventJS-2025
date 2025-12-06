const timeUntilTakeOff = require('./cuenta_atras')

test('Test #1: return type',() => {
    expect(
        Number.isNaN(timeUntilTakeOff('2025*12*24@23|59|30 NP', '2025*12*25@00|00|00 NP')))
        .toBe(false)
})

test("Test #2: timeUntilTakeOff('2025*12*24@23|59|30 NP', '2025*12*25@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2025*12*24@23|59|30 NP', '2025*12*25@00|00|00 NP')
    ).toBe(30)
})

test("Test #3: timeUntilTakeOff('2025*12*25@00|00|00 NP','2025*12*25@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2025*12*25@00|00|00 NP','2025*12*25@00|00|00 NP')
    ).toBe(0)
})

test("Test #4: timeUntilTakeOff('2025*12*25@00|00|12 NP','2025*12*25@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2025*12*25@00|00|12 NP','2025*12*25@00|00|00 NP')
    ).toBe(-12)
})

test("Test #5: timeUntilTakeOff('2025*12*24@00|00|00 NP','2025*12*25@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2025*12*24@00|00|00 NP','2025*12*25@00|00|00 NP')
    ).toBe(86400)
})

test("Test #6: timeUntilTakeOff('2025*12*27@00|00|00 NP','2025*12*25@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2025*12*27@00|00|00 NP','2025*12*25@00|00|00 NP')
    ).toBe(-172800)
})

test("Test #7: timeUntilTakeOff('2030*01*01@00|00|10 NP','2030*01*01@00|00|20 NP')",() => {
    expect(
        timeUntilTakeOff('2030*01*01@00|00|10 NP','2030*01*01@00|00|20 NP')
    ).toBe(10)
})

test("Test #8: timeUntilTakeOff('2030*01*01@00|01|00 NP','2030*01*01@00|00|00 NP')",() => {
    expect(
        timeUntilTakeOff('2030*01*01@00|01|00 NP','2030*01*01@00|00|00 NP')
    ).toBe(-60)
})
