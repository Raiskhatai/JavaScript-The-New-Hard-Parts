// using each element one-by-one

// 1.	The process of accessing each element
// 2.	What we want to do to each element
// Iterators automate the accessing of each element - so we can focus on what to do to each element - and make it available to us in a smooth way
// Imagine if we could create a function that stored numbers and each time we ran the function it would return out an element (the next one) from numbers. NOTE: It’d have to remember which element was next up somehow
// But this would let us think of our array/list as a ‘stream’/flow of data with our function returning the next element from our ‘stream’ - this makes our code more readable and more functional

function create_function(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const return_next_element = create_function([4, 5, 6]);

const element1 = return_next_element();
console.log(element1);
const element2 = return_next_element();
console.log(element2);
// output 4 5

// The bond
// — When the function inner is defined, it gets a bond to the surrounding Local Memory in which it has been defined
// — When we return out inner, that surrounding live data is returned out too - attached on the ‘back’ of the function definition itself (which we now give a new global label returnNextElement)
// — When we call returnNextElement and don’t find array or i in the immediate execution context, we look into the function definition’s ‘backpack’ of persistent live data
// — The ‘backpack’ is officially known as the C.O.V.E. or ‘closure’
