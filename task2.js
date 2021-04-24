//Task 2: Write a function to Generate Fibonacci Numbers. The function should take the length of the series and should return an array of Fibonacci numbers starting from 0.the sequence goes like this : 0,1,1,2,3,5,8,13,21,34,55,89 ... Here every number is the sum of the previous two numbers. 

// Ex 1:
// Input: n = 3
// Output: [0,1,1]

// Ex 2:
// Input: n = 5
// Output: [0,1,1, 2,3]

// Solutions

// Naveed
console.log("Fibonacci Series:");

function Fibonacci() {
    const userEnteredNumber = document.getElementById('enteredNumber').value;
    let num1 = 0, num2 = 1; nextNum = 0;
    for(i = 0; i < userEnteredNumber; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

//Raj Bhat
function fibonacci(n){
  if(n>0){
    var x=0;
    var y=1;
    var fib=0;
    for(var i=1;i<=n;i++){
      console.log("fib number are");
      console.log(x);
      fib=x+y;
      x=y;
      y=fib;
    } 
  } 
  else { 
    console.log("invalid number");
  }
}
fibonacci(5);