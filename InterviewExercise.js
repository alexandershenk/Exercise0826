/**
 * Q1 - Given a number and an array, print both the count of integers in the 
 * array above the number and the count below it:
 */
let countAboveAndBelow = (arr, comparison) => {
  if(isNaN(comparison) || !Array.isArray(arr))
    return;

  let above = 0, below = 0;  

  for (let num of arr) {
    if (num > comparison) above++;
    else if (num < comparison) below++;
  }

  return {above: above, below: below};
};

let result = countAboveAndBelow([1,5,2,1,10], 6);
console.log("above: "+result.above+", below: "+result.below);

/**
 * Q2 - Given a string and an offset, rotate the string:
 */
let rotateString = (str, offset=0) => {
  if (isNaN(offset) || !(typeof str === 'string' || str instanceof String))
    return;
  
  return str.slice((str.length-offset) % str.length, str.length) +
                   str.slice(0, (str.length-offset) % str.length);
};
console.log(rotateString("MyString", 2));
