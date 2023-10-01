//You are given two arrays and an index.
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let array1copy = arr1.slice(0, (arr1.length))
  console.log(array1copy);

  let array2copy = arr2.slice(0, (arr2.length))
  console.log(array2copy);



  for (let i = 0; i <  array1copy.length; i++){
      array2copy.splice((n + i), 0, array1copy[i])
    
}
  console.log(array2copy)
  return array2copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);