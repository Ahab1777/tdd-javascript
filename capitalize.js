//A capitalize function that takes a string and returns it with the first character capitalized.


export const capitalize = (word) => {
    const choppedWord = [...word];
    choppedWord[0] = choppedWord[0].toUpperCase();
    // console.log(choppedWord)
    return choppedWord.join('')
}

// console.log(capitalize('dog'))