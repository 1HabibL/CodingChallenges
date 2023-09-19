
function findLongestWordLength(str) {
    let strtoarray = str.split(" ");
    console.log(strtoarray);
    var max = 0
    for (var i = 0; i < strtoarray.length; i++) {
        
        if (strtoarray[i].length > max) {
            max = strtoarray[i].length;
            
        } 
        
    }
    return max;
}
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");