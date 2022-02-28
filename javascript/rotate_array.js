//i
  //array of numbers
  //k units to rotate 
//o
  //array of numbers shifted k units
//e
  //assuming k is always an integer greater than or equal to 0

function rotateArray(arr, k) {
  if (k > arr.length) {
    k = k % arr.length
  }

  if (k === 0 || arr.length === k) {
    return arr;
  }


  return [...arr.slice(-k), ...arr.slice(0, arr.length - k)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("TEST")
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("TEST")
  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("TEST")
  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
  
  console.log("TEST")
  console.log("Expecting: [1, 2, 3, 4, 5, 6]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5, 6], 6), '\n');

  console.log("TEST")
  console.log("Expecting: [5, 4, 3, 2, 1]");
  console.log("=>", rotateArray([4, 3, 2, 1, 5], 1), '\n');

  console.log("TEST")
  console.log("Expecting: [5, 4, 3, 2, 1]");
  console.log("=>", rotateArray([4, 3, 2, 1, 5], 6), '\n');

  console.log("TEST")
  console.log("Expection!: [4, 1, 2, 3]")
  console.log("=>", rotateArray([1, 2, 3, 4], 41), '\n');
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
