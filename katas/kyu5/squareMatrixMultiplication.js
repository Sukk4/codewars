// https://www.codewars.com/kata/5263a84ffcadb968b6000513

function matrixMultiplication(a, b){
  var result = [];
  for (var i=0; i<a.length; i++){
    result[i] = [];
    for (var j=0; j<a[i].length; j++){
      var sum = 0;
      for (var k=0; k<a[i].length; k++){
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}