function* create_flow() {
  const num = 10;
  const new_num = yield num;
  yield 5 + new_num;
  yield 6;
}

const return_next_element = create_flow();
const element1 = return_next_element.next();
const element2 = return_next_element.next(2);
const element3 = return_next_element.next();

console.log(element1);
console.log(element2);
console.log(element3);

// output :=

// { value: 10, done: false }
// { value: 7, done: false }
// { value: 6, done: false }
