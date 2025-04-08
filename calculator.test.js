import { add, subtract, divide, multiply } from "./calculator";

describe('add', () => {
    test('4+4=8', () => {
        expect(add(4,4)).toBe(8)
    });

    test('1+2=3', () => {
        expect(add(1,2)).toBe(3)
    })

    test('7+2=9', () => {
        expect(add(7,2)).toBe(9)
    })
})

describe('subtract', () => {
    test('1-1=0', () => {
        expect(subtract(1,1)).toBe(0)
    })

    test('2-(-4)=6', () => {
        expect(subtract(2,-4)).toBe(6)
    })

    test('100-99=1', () => {
        expect(subtract(100,99)).toBe(1)
    })
})

describe('divide', () => {
    test('1/1=1', () => {
        expect(divide(1,1)).toBe(1)
    })

    test('9/3=3', () => {
        expect(divide(9,3)).toBe(3)
    })

    test('1/2=0.5', () => {
        expect(divide(1,2)).toBe(0.5)
    })
})

describe('multiply', () => {
    test('1*1=1', () => {
        expect(multiply(1,1)).toBe(1)
    })

    test('9*3=3', () => {
        expect(multiply(9,3)).toBe(27)
    })

    test('1*2=0.5', () => {
        expect(multiply(1,2)).toBe(2)
    })
})