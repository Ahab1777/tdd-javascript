import { reverseString } from "./reverseString";

test('Turns Leonardo to odranoeL', () => {
    expect(reverseString('Leonardo')).toBe('odranoeL')
    expect(reverseString('bola')).toBe('alob')

})