function print_hello() {
  console.log("hello");
}

setTimeout(print_hello, 1000);

console.log("me first");
// output:=
// me first
// hello

// setTimeOut browser api hey jo hey timer yeh callback function and time browser mey use karta hey agar time ho gaya hey tab callback function ko task queue/callback queue/ macrotask queue mey bhej deta hey feer event loop check karta hey kya call stack empty agar empty hey callback function ko call stack mey chalao run kardo.
// jab tak callback function task queue mey rahta hey tab tak sync/non-blocking kaam ho jata hey.