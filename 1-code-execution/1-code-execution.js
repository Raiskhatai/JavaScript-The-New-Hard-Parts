const num = 3;
function multiply_by_3(input_num) {
  const result = input_num * 3;
  return result;
}

const name = "will";

// what happens when javascript executes(runs) my codes ?

// as soon as we start running out code, we create a global execution context
// - Thread of execution is (parsing and executing the code line after line).
// — Live memory of variables with data (known as a Global Variable Environment).

// When you execute a function you create a new execution context comprising:
// 1.	The thread of execution (we go through the code in the function line by line)
// 2.	A local memory ('Variable environment') where anything defined in the function is stored
