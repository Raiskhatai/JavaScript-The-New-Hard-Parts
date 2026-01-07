function do_when_data_received(value) {
  return_next_element.next(value);
}

function* create_flow() {
  const data = yield fetch(
    " https://api.thecatapi.com/v1/images/search?limit=10"
  );
  console.log(data);
}

const return_next_element = create_flow();
const future_data = return_next_element.next();
future_data.value.then(do_when_data_received);
