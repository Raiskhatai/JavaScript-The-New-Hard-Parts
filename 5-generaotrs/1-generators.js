// Data ko ek-ek karke access karna, bina poora data ek sath diye.

// function create_flow(array) {
//   let i = 0;
//   const inner = {
//     next: function () {
//       const element = array[i];
//       i++;
//       return element;
//     },
//   };
//   return inner;
// }

// const return_next_element = create_flow([4, 5, 6]);
// const element1 = return_next_element.next();
// const element2 = return_next_element.next();
// console.log(element1);
// console.log(element2);

/* both work same */

/* generators */

function* create_flow() {
  yield 4;
  yield 5;
  yield 6;
}

const return_next_element = create_flow();
const element1 = return_next_element.next();
const element2 = return_next_element.next();
const element3 = return_next_element.next();

console.log(element1);
console.log(element2);
console.log(element3);

// output : = 
// { value: 4, done: false }
// { value: 5, done: false }
// { value: 6, done: false }

/* ---------- */

// let arr = [10, 20, 30];

// let iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
// { value: undefined, done: true }

// function myIterator(arr) {
//   let index = 0;

//   return {
//     next() {
//       if (index <= arr.length) {
//         return { value: arr[index++], done: false };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// }

// let it = myIterator([1, 3, 4]);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// op :
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: false }
