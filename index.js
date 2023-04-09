function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split('');
  for (i=0; i < wordArray.length; i++){
    if (wordArray[i] === wordArray[(wordArray.length - i - 1)]){
      
    } else {
      return false;
    }
    return true;
  }
}

/* 
  create array from string
  iterate from beginning of word
  iterate from end of word
  compare as you iterate through letters
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
