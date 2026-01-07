function print_hello() {
  console.log("hello");
}

function block_for_1_second() {}

setTimeout(print_hello, 0);

block_for_1_second();

console.log("me first!");
// output:=
// me first! 
// hello

// setTimeOut ka callback function 0 second hone par bhi baad mey chale yeh is liye hua kyu ki pahle callback function task queue mey gaya feer wah event loop ne check kiya call stack khali karne ke baad setTimeOut callback function ko call stack mey bheja.