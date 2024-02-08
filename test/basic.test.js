const calculator = require('../src/basic');

describe('Add', ()=> {
    var BVAdata = [
        [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10]
]

describe.each(BVAdata)('BVA: add(%i, %i), Expected: %i', (a,b,expected)=> {
    test(`returns ${calculator.add(a,b)}`, ()=> {
        expect(calculator.add(a,b)).toBe(expected);  
    });
});

var DTdata = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54]
]
describe.each(DTdata)('DT: add(%i, %i), Expected: %i', (a,b,expected)=> {
    test(`returns ${calculator.add(a,b)}`, ()=> {
        expect(calculator.add(a,b)).toBe(expected);  
    });
});
});

describe('Subtract', () => {
    var BVAdata = [
        [3, 2, 1],
        [9, 5, 4],
        [15, 12, 3],
        [10, 6, 4]
    ];

    describe.each(BVAdata)('BVA: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [89, 0, 89],
        [-17, -35, 18],
        [65, -12, 77],
        [-78, 24, -102]
    ];

    describe.each(DTdata)('DT: subtract(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.subtract(a, b)}`, () => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });
});

describe('Multiply', () => {
    var BVAdata = [
        [3, 2, 6],
        [9, 5, 45],
        [15, 12, 180],
        [10, 6, 60]
    ];

    describe.each(BVAdata)('BVA: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [89, 0, 0],
        [-17, -35, 595],
        [65, -12, -780],
        [-78, 24, -1872]
    ];

    describe.each(DTdata)('DT: multiply(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.multiply(a, b)}`, () => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });
});

describe('Divide', () => {
    var BVAdata = [
        [6, 2, 3],
        [45, 5, 9],
        [180, 12, 15],
        [60, 6, 10]
    ];

    describe.each(BVAdata)('BVA: divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [89, 1, 89],
        [-17, -35, 0.4857142857142857],
        [65, -12, -5.416666666666667],
        [-78, 24, -3.25]
    ];

    describe.each(DTdata)('DT: divide(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.divide(a, b)}`, () => {
            expect(calculator.divide(a, b)).toBe(expected);
        });
    });
});