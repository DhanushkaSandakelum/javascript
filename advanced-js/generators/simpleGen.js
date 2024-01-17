function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

const genObj = simpleGenerator()
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());