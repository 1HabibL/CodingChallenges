//Write a function that splits an array (first argument) into groups the length of size (second argument) 
//and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let divideArray = [];
    do {
       
    let firstslice = arr.splice(0, size);
    console.log(firstslice)
    divideArray.push(firstslice);
    console.log(divideArray)
    } while (arr.length > 0)
   
    return divideArray
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);