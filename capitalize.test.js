//A capitalize function that takes a string and returns it with the first character capitalized.

import { capitalize } from "./capitalize";

test('Turns dog into Dog', () => {
    expect(capitalize('dog')).toBe('Dog')
})