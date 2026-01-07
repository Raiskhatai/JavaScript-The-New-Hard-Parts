function display(data) {
  console.log(data);
}

function print_hello() {
  console.log("hello");
}

function block_for_300ms() {
  /* blocks js thread for 300ms with long for loop */
}

setTimeout(print_hello, 0);

const future_data = fetch(
  " https://api.thecatapi.com/v1/images/search?limit=10"
);
future_data.then(display);

block_for_300ms();

// output := 
// hello 
// feer api response.

// fetch()=fetch 2 kaam karta hey
// 1) promise object banata hey jisme hote hey value and fullfilment[] array
// 2) xhr = (xml http request) yeh request hey bhejta hey server ko jab request ki gyi value aati hey usko promise ki value mey send kar diya jata hey .
// then ka kaam hota hey callback function ko run karna jab value aati hey fullfillment mey then ke andar wala callback function fullfilment mey jata hey or automatic value trigger karke callback function ka run kar deti hey.
