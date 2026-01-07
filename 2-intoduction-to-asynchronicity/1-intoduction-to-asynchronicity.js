// JavaScript is single threaded (one command executing at a time) and has a synchronous execution model (each line is executed in order the code appears)
// So what if we need to wait some time before we can execute certain bits of code? Perhaps we need to wait on fresh data from an API/server request or for a timer to complete and then execute our code
// We have a conundrum - a tension between wanting to delay some code execution but not wanting to block the thread from any further code running while we wait

// Solution 1

function display(data) {
  console.log(data);
}

const data_from_api = fetch(
  " https://api.thecatapi.com/v1/images/search?limit=10"
);

let val = display(data_from_api);
console.log("me letter!");

//... user can do NOTHING here !
//... could be 300ms, could be half a second 
// they're just clicking and getting nothing 