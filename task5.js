// Create a single function which can perform sum(a, b, c), sum(a, b)(c), sum(a)(b, c) and sum(a)(b)(c) and returns sum of a, b and c
// Example
// sum(2)(4)(6);            // 12
// sum(3, 2)(5);            // 10
// sum(4)(-10, -6);         // -12
// sum(6, -3, 1);           // 4


// Sachin
function sum(a, b, c) {
  if (a != undefined && b != undefined && c != undefined) { // of type sum(a,b,c)
    return a + b + c;
  } else if (a != undefined && b != undefined && c == undefined) { // of type sum(a,b)(c)
    return function (c) {
      return a + b + c;
    };
  } else if (a != undefined && b == undefined && c == undefined) {
    return function (b, c) {
      if (b != undefined) {
        if (c != undefined) { // of type sum(a)(b,c)
          return a + b + c;
        } else {
          return function (c) { // of type sum(a)(b)(c)
            if (c != undefined) return a + b + c;
          };
        }
      }
    };
  }
}

console.log(sum(2)(4)(6));
console.log(sum(3, 2)(5));
console.log(sum(4)(-10, -6));
console.log(sum(6, -3, 1));
