function isPalindrome(word) {
  // Write your algorithm here
  //write a function. inside it pass an argument for a string.in the body of the function use 
  //if statements to check if the word reads the same from whichever direction it is looked at. if so, return true, otherwise return false
  

  if (word === word.split("").reverse().join("")) {
  return true
  }
  else
      return false
  };
  isPalindrome("madam");

/* 
  Add your pseudocode here
  write a funtion called isPalindrome.
  pass one argument
  pass an if statement with strict comparison operator
  if word is palindrome, return true
  otherwise return false
*/

/*
  ensure the string is lowercase and the words read the same back to front and front to back
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //expect madam === true
  //expect robot === false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
