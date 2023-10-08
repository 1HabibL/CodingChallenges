//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

//Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


function mutation(arr) {
   
    let arr1 = arr[0];
    let arr2 = arr[1];
    
    let string1 = arr1.toLowerCase();
    let string2 = arr2.toLowerCase();
    
    let array1 = string1.split("");
    let array2 = string2.split("");
    
    let matchingArray = []
    for(let i = 0; i < array2.length; i++) {
            if (array1.includes(array2[i])){
              matchingArray.push(array2[i])
               console.log(matchingArray)
              }
            }
    
    let ar2string = array2.join("");
    console.log(ar2string)
    let mastring = matchingArray.join("");
    console.log(mastring)
            
        if(ar2string === mastring) {
                console.log("true")
                return true
              
        } else {console.log("false")
        return false}
    
}
  
  mutation(["hello", "hey"]);