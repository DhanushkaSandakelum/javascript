function* generateID() {
  let id = 0;

  while (true) {
    let increment = yield id;

    if (increment) {
      id += increment;
    } else {
      id++;
    }
  }
}

console.log("--- idGen1 ---");
const idGen1 = generateID()
console.log(idGen1.next());
console.log(idGen1.next());
console.log(idGen1.next(10));
console.log(idGen1.next());
console.log(idGen1.next());

console.log("--- idGen2 ---");
const idGen2 = generateID()
console.log(idGen2.next());
console.log(idGen2.next());
console.log(idGen2.return(10));
console.log(idGen2.next());
console.log(idGen2.next());


console.log("--- idGen3 ---");
const idGen3 = generateID()
console.log(idGen3.next());
console.log(idGen3.next());
console.log(idGen3.throw(new Error("This is an error")));
