//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
//The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArray = [...arr]
  
 let finalarray = newArray.sort((a, b) => a - b)
 console.log(finalarray)
 return finalarray

  // Only change code above this line
}