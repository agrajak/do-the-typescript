function f() {
  var a = 1;
  a = 2;
  var b = g();
  a = 3;
  return b;

  function g() {
    return a;
  }
}
f(); // will return 2; because g captured variable a declared in f.

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i=0; i<matrix.length; i++){
    var currentRow = matrix[i];
    for (var i=0; i<currentRow.length; i++){
      sum += currentRow[i];
    }
  }
  return sum;
} // common mistakes declaring the same variable multiple times;

for (var i=0;i<10;i++){
  setTimeout(function() { console.log(i); }, 100*i);
} // will 10 10 10 10 10 10 10 10 ... becuase setTimeout actually refers to the smae i from the same scope.

for (var i=0;i<10;i++){
  // caputure the current state of 'i'
  // by invoking a function with its current value
  (function(i) {
    setTimeout(function() { console.log(i); }, 100*i);
  })(i);
}

for (let i=0;i<10;i++) {
  setTimeout(function(){ console.log(i); }, 100*i);
}