export const analyzeArray = (array) => {
    return {
        average: average(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

const average = (array) => {
    const sum = array.reduce((arraySum, item) => arraySum + item, 0)
    return sum / array.length;
}
