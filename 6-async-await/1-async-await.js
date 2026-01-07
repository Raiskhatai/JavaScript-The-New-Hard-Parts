async function createflow() {
  console.log("me first");
  const data = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  console.log(data);
}

createflow();

console.log("me second");

// me first
// me second
// api response .

/* both are same */

// function do_when_data_received(value) {
//   return_next_element.next(value);
// }

// function* create_flow() {
//   const data = yield fetch(
//     " https://api.thecatapi.com/v1/images/search?limit=10"
//   );
//   console.log(data);
// }

// const return_next_element = create_flow();
// const future_data = return_next_element.next();
// future_data.value.then(do_when_data_received);
