const drawTable = require('./dibujando_tablas');

test('Test #1: return type',() => {
    expect(typeof drawTable([{ name: 'Charlie', city: 'New York' },],'name'))
            .toBe('string')
})

test(`Test #2: drawTable([
        { name: 'Charlie', city: 'New York' },
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' }
    ],'name')`,() => {
        expect(
            drawTable(
            [
                { name: 'Charlie', city: 'New York' },
                { name: 'Alice', city: 'London' },
                { name: 'Bob', city: 'Paris' }
            ],
            'name'
            )
        ).toBe('+---------+----------+\n' +
            '| A       | B        |\n' +
            '+---------+----------+\n' +
            '| Alice   | London   |\n' +
            '| Bob     | Paris    |\n' +
            '| Charlie | New York |\n' +
            '+---------+----------+'
        )
})

test(`Test #3: drawTable([
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
        { gift: 'Doll', quantity: 10 }
    ], 'quantity')`,() => {
        expect(
            drawTable(
                [
                    { gift: 'Book', quantity: 5 },
                    { gift: 'Music CD', quantity: 1 },
                    { gift: 'Doll', quantity: 10 }
                ],
                'quantity'
            )
        ).toBe('+----------+----+\n' +
            '| A        | B  |\n' +
            '+----------+----+\n' +
            '| Music CD | 1  |\n' +
            '| Book     | 5  |\n' +
            '| Doll     | 10 |\n' +
            '+----------+----+'
        )
})

test(`Test #4: drawTable([
        { name: 'Alice', city: 'Paris' },
        { name: 'Bob', city: 'London' }
    ], 'city')`,() => {
        expect(
            drawTable([
                { name: 'Alice', city: 'Paris' },
                { name: 'Bob', city: 'London' }
            ], 'city')
        ).toBe('+-------+--------+\n' +
            '| A     | B      |\n' +
            '+-------+--------+\n' +
            '| Bob   | London |\n' +
            '| Alice | Paris  |\n' +
            '+-------+--------+'
        )
})

test(`Test #5: drawTable([{ name: 'Alice', city: 'London' }], 'name')`,() => {
        expect(
            drawTable([{ name: 'Alice', city: 'London' }], 'name')
        ).toBe('+-------+--------+\n' +
            '| A     | B      |\n' +
            '+-------+--------+\n' +
            '| Alice | London |\n' +
            '+-------+--------+'
        )
})

test(`Test #6: drawTable([
        { a: 2, b: 'Y', c: 'X' },
        { a: 1, b: 'Z', c: 'W' },
        { a: 3, b: 'A', c: 'B' }
    ], 'a')`,() => {
        expect(
            drawTable([
                { a: 2, b: 'Y', c: 'X' },
                { a: 1, b: 'Z', c: 'W' },
                { a: 3, b: 'A', c: 'B' }
            ], 'a')
        ).toBe('+---+---+---+\n' +
            '| A | B | C |\n' +
            '+---+---+---+\n' +
            '| 1 | Z | W |\n' +
            '| 2 | Y | X |\n' +
            '| 3 | A | B |\n' +
            '+---+---+---+'
        )
})

test(`Test #7: drawTable([
        { id: 'zebra', active: true },
        { id: 'alpha', active: false }
    ], 'id')`,() => {
        expect(drawTable([
            { id: 'zebra', active: true },
            { id: 'alpha', active: false }
        ], 'id')
        ).toBe('+-------+-------+\n' +
            '| A     | B     |\n' +
            '+-------+-------+\n' +
            '| alpha | false |\n' +
            '| zebra | true  |\n' +
            '+-------+-------+'
        )
})
