// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function GrandPa(){
  console.log('Hello');
  function Dad(){
    console.log('Hello, Everyone');
    function Mom(){
      console.log('School is for fools');
    }
    Mom();
  }
  Dad();
}
GrandPa();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    count +=1;
    return count;
  }
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return newObject = [
    increment = function(){
      count += 1
      return count;
    },
    decrement = function(){
      count -=1;
      return count;
    }
  ]
};

const newFactory = counterFactory();
console.log(newFactory);