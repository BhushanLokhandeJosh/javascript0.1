/* Write a function to filter an array of strings to hold 
 only unique values. */

let arr = ["Bhushan", "Ramesh", "Maaz", "Bhushan", "Yogesh"];

function uniquesNames(currentValue, index, arr) {
  console.log(currentValue + " " + index + " " + arr);
  return arr.indexOf(currentValue) === index;
}

function filterArrayByUniqueNames(arr) {
  let names = arr.filter(uniquesNames);
  return names;
}

console.log(filterArrayByUniqueNames(arr));
