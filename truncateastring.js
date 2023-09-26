//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {
    let array1 = [];
    if (str.length <= num) {
      console.log(str)
      return str 
    } else if (str.length > num) {
        for (let i = 0; i < num; i++) {
           array1.push(str[i])
        }
       
        
    }
    let output = array1.join('') + "..."
    console.log(output)
    return output;
}
  
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);