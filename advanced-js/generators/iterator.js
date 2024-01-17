function* iterator(arr){
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];        
    }
}

const iteratorObj = iterator([1, 5, 2, 7])
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());