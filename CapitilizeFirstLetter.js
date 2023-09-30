//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {

    if (typeof str !== 'string') {
        // Handle non-string input, or return an error message
        return "Input is not a string.";
    }
let str2 = str.toLowerCase();
let array1 = [];
let stringarray = str2.split(' ');
let result = '';

    for (let p = 0; p < stringarray.length; p++){
        for (let i = 0; i < stringarray[p].length; i++) {
            if (i === 0) {
                array1.push(stringarray[p][0].toUpperCase())
                
            } else {array1.push(stringarray[p][i])
                
            }
            
            if (i === stringarray[p].length - 1) {
                array1.push(" ");   
            }
        
            result = array1.join('')
           
        }
        
        }
        console.log(result);
        return result;   
  }
titleCase("sHoRt AnD sToUt");