//Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. 
//The function should return a string. For example, 
//I-like-Star-Wars would be converted to I like Star Wars. 
//For this challenge, do not use the replace method.

function sentensify(str) {
    // Only change code below this line
  let array1 = []
  array1.push(str);
  console.log(array1)
  let joinedStr = array1.join(" ")
  console.log(joinedStr)
  let newStr = joinedStr.split(/\W/)
  console.log(newStr)
  let finalStr = newStr.join(" ")
  console.log(finalStr)
  return finalStr
    // Only change code above this line
  }