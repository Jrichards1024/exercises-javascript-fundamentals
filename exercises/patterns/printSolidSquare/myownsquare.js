function printSolidSquare(height) {
    newLine = "\r\n"
    square =""
    for (let i = 0 ; i < height; i ++){
        for (let j = 0; j < height; j ++){
            square = square + "#"}
            square = square + newLine
        }
    return (square)
}

console.log(printSolidSquare(4))
console.log(printSolidSquare(6))
console.log(printSolidSquare(10))
console.log(printSolidSquare(12))