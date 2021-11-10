// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  return [highest, lowest]; // fix me!
}

console.log(minMax([1,2,3,4,5,6]));