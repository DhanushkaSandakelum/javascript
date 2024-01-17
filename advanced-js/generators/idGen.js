function* generateID(){
    let id = 0

    while (true) {
        yield id++
    }
}

const idGenObj = generateID()
console.log(idGenObj.next());
console.log(idGenObj.next());
console.log(idGenObj.next());