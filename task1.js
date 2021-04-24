// Write a function called FooBar that takes integer n and prints all the numbers from 1 upto n. If the number is divisible by 3 then print "Foo", if the number is divisible by 5 then print "Bar" and if the number is divisible by both 3 and 5, print "FooBar". Otherwise, just print the number.

// Ex:
// Input: n = 15
// Output: 1 2 Foo 4 Bar Foo 7 8 Foo Bar 11 Foo 13 14 FooBar

// Solutions

// Naveed
function FooBar() {
    let userNumber = document.getElementById("userNumber").value;
    for(let i = 1; i <= userNumber; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FooBar");
        }else if (i % 5 == 0) {
            console.log("Bar");
        } else if (i % 3 == 0) {
            console.log("Foo");
        } else {
            console.log(i);
        }
    }
}

// Sachin
function fooBar(n){     
  for(i=1;i<=n;i++) {
      if (i%3==0 && i%5==0) string = 'FooBar';
      else if (i%3==0) string = 'Foo'; 
      else if (i%5==0) string = 'Bar'; 
      else string = i;
      console.log(string);
  }
}

//Raj Bhat
function foobar(n) {
if(n>0){
   
    for(var i= 1; i<=n; i++) {
        if((i%3== 0)&&(i%5==0)){
            console.log("foobar");}
        else if(i%5==0){
            console.log("bar");}
        else if(i%3==0){
            console.log("foo");}
       else{
            console.log(i);
        }
    }
}

else{
console.log("invalid number");}
}

foobar(5);