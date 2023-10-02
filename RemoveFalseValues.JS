//Remove all falsy values from an array. Return a new array; do not mutate the original array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let booleanarray = []
    for (let i = 0; i < arr.length; i++){
        booleanarray.push(arr[i])
        console.log(booleanarray)  
    }

    for (let k = booleanarray.length - 1; k >= 0; k--){
        if (Boolean(booleanarray[k]) === false){
            booleanarray.splice(k, 1)
            console.log(booleanarray)
            
        }
    }


    return booleanarray;
  }
  
  bouncer([7, "ate", "", false, 9]);