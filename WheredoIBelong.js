//Return the lowest index at which a value (second argument) 
//should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
//but less than 2 (index 1).
//Likewise, getIndexToIns([20,3,5], 19) should return 2 
//because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    const n = arr.length;
    let swapped;
  
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
            
        }
    } while (swapped);
  
    for(let k = 0; k < n; k++){
        if(num < arr[k]){
            arr.splice(k, 0, num)
            console.log(arr)
    } 


  }
  {arr.push(num)}
  console.log(arr.indexOf(num))
  let finalindex = arr.indexOf(num)
  return finalindex
}
  


getIndexToIns([2, 5, 10], 15)
  