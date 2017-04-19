// https://www.codewars.com/kata/526233aefd4764272800036f

function matrixAddition(a, b){
  var matrix = [];
  for (var i=0; i<a.length; i++){
    matrix.push([]);
    for(var j=0; j<a[i].length; j++){
      matrix[i][j] = a[i][j] + b[i][j];
    }
  }
  return matrix;
}