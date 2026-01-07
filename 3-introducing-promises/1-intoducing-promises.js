// — Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature
// (e.g. fetch) that’s set up to return promises (not all are)
// — Promises act as a placeholder for the data we hope to get back from the web browser feature’s background work
// — We also attach the functionality we want to defer running until that background work is done (using the built in .then method)
// — Promise objects will automatically trigger that functionality to run
// — The value returned from the web browser feature’s work (e.g. the returned data from the server using fetch) will be that function’s input/argument

function display(data) {
  console.log(data);
}

const future_data = fetch(
  " https://api.thecatapi.com/v1/images/search?limit=10"
);
future_data.then(display);
console.log("me first");
// output :=
// me first
// api result.
