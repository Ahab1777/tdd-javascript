import { caesarCipher } from "./caesarCipher";

describe('caesarCypher', () => {
    test('ShiftFacto 3:=HeLLo becomes =KhOOr', () => {
        expect(caesarCipher('=HeLLo', 3)).toBe('=KhOOr')
    })

    test('ShiftFacto 3:xya becomes abc', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })

    test('ShiftFacto 3: Hello, World! becomes Khoor, Zruog!', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})