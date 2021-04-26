// Write a function to check if it is a palindrome or not. A string is said to be palindrome if reverse of the string is same as string.

// Ex 1:
// Input: n = "race car"
// Output: true

// Ex 2:
// Input: n = "not a palindrome"
// Output: false

// Solutions

//Kuldip Mochi
function palindrome(str){
  let end = str.length-1;
  let start=0;
  while(start<end){
    if(str[start]==' '){
      start++;
    }else if(str[end]==' '){
      end--;
    }else if(str[start]==str[end]){
      start++;
      end--;
    }else{
      return false;
    }
  }
  return true;
}

console.log(palindrome("kuddu k"))

//Sachin
function isPalindrome(string){
  string=string.replace(/\s/g, ''); // remove one or more white spaces and this is case sensitive
  for(i=0;i<string.length/2;i++){
    if(!(string.charAt(i)===string.charAt(string.length-1-i))){
      console.log(false);
      return 0;
    }
  }
  console.log(true);
}

// Naveed
function Palindrome(text) {
    let reversedString = text.toLowerCase().split('').reverse().join('');
    if(text === reversedString) {
        console.log(true)
    }else {
        console.log(fasle)
    }
}

Palindrome('racecar');

//Anusha
function palindrome(a) {
    let str = ''
    if (a.length == 0) {
        return "invalid input"
    }
    for (let i = 0; i < a.length; i++){
        str = a[i] + str
    }

    if (a == str) {
        return true
    }
    else {
        return false
    }

}

console.log(palindrome('level'))