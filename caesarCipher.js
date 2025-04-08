export const caesarCipher = (word, shiftFactor) => {
    const wordToString = [...word]
    const cipherText = []
    wordToString.forEach((symbol, index) => {
        //console.log(cipherSymbol(symbol, shiftFactor))
        cipherText.push(cipherSymbol(symbol, shiftFactor))
        //console.log(cipherText)
    })
    return cipherText.join('')

}

//string.fromCharCode(65)
//char.charCodeAt(0)
//A-Z 65-90
//a-z 97-122

//spread word into array
//forEach item in array, apply cipher with shift


//cipher + shift factor
//convert item to ascii decimal
//if out of letter range, return it
//if ascii number + shiftFactor > 90 but smaller than 97
    // subtract 26
//if ascii number + shiftFactor > 122
    //subtract 26
//return ascii + shiftFactor

const cipherSymbol = (symbol, shiftFactor) => {
    let ascii = symbol.charCodeAt(0);

    // Handle uppercase letters (A-Z)
    if (ascii >= 65 && ascii <= 90) {
        ascii = ((ascii - 65 + shiftFactor) % 26 + 26) % 26 + 65; // Wrap around within A-Z
        return String.fromCharCode(ascii);
    }

    // Handle lowercase letters (a-z)
    if (ascii >= 97 && ascii <= 122) {
        ascii = ((ascii - 97 + shiftFactor) % 26 + 26) % 26 + 97; // Wrap around within a-z
        return String.fromCharCode(ascii);
    }

    // Return non-alphabetic characters unchanged
    return symbol;
};